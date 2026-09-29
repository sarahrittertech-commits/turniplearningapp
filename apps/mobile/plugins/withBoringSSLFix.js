/**
 * Expo config plugin: fix BoringSSL-GRPC build failure on Xcode 16+.
 *
 * Fixes applied:
 *
 * 1. (withXcodeProject) Set on the main Turnip app target for both Debug and Release:
 *    - EXCLUDED_ARCHS[sdk=iphonesimulator*] = x86_64
 *      On Apple Silicon Macs the simulator runs arm64 natively; excluding x86_64
 *      prevents the useless second compilation slice that triggers clang issues.
 *    - SWIFT_ENABLE_EXPLICIT_MODULES = NO
 *      Xcode 16+ Explicitly Built Modules pre-scans all Swift imports before any
 *      pod target is compiled. ExpoModulesProvider.swift (added directly to the
 *      Turnip target's Sources phase) imports Expo frameworks that don't exist yet
 *      on a cold build. Disabling EBM falls back to integrated-driver mode, which
 *      resolves imports in dependency order.
 *
 * 2. (withDangerousMod / Podfile post_install) Strip `-GCC_WARN_INHIBIT_ALL_WARNINGS`
 *    from BoringSSL-GRPC per-file compiler flags. Clang 16+ parses this as the
 *    unsupported `-G` option when targeting the iOS simulator.
 *    Ref: https://github.com/firebase/firebase-ios-sdk/issues/12661
 *
 * 3. (withDangerousMod / Podfile post_install) Set EXCLUDED_ARCHS[sdk=iphonesimulator*]
 *    = x86_64 on all pod targets via the CocoaPods post_install hook.
 */

// Resolve @expo/config-plugins — pnpm doesn't hoist it to a standard location,
// so global tools (eas-cli) can't find it via a plain require() from this file.
// Try two resolution strategies before falling back to a no-op.
let withDangerousMod, withXcodeProject, configPluginsLoaded = false;
try {
  ({ withDangerousMod, withXcodeProject } = require('@expo/config-plugins'));
  configPluginsLoaded = true;
} catch {
  try {
    const expoRoot = require.resolve('expo/package.json', { paths: [__dirname + '/..'] })
      .replace('/package.json', '');
    ({ withDangerousMod, withXcodeProject } = require(
      require.resolve('@expo/config-plugins', { paths: [expoRoot] })
    ));
    configPluginsLoaded = true;
  } catch {
    // config-plugins unavailable — export no-op. The Podfile patches are already
    // applied manually in ios/Podfile so nothing is lost for EAS/cloud builds.
  }
}

if (!configPluginsLoaded) {
  module.exports = (config) => config;
} else {

const fs = require('fs');
const path = require('path');

const SENTINEL = '# [withBoringSSLFix] applied';

// Podfile post_install patch — BoringSSL flag strip + pod target EXCLUDED_ARCHS
const POST_INSTALL_PATCH = `
  ${SENTINEL}
  installer.pods_project.targets.each do |target|
    if target.name == 'BoringSSL-GRPC'
      target.source_build_phase.files.each do |file|
        if file.settings && file.settings['COMPILER_FLAGS']
          flags = file.settings['COMPILER_FLAGS'].split
          flags.reject! { |flag| flag == '-GCC_WARN_INHIBIT_ALL_WARNINGS' }
          file.settings['COMPILER_FLAGS'] = flags.join(' ')
        end
      end
    end
    target.build_configurations.each do |config|
      config.build_settings['EXCLUDED_ARCHS[sdk=iphonesimulator*]'] = 'x86_64'
    end
  end

  # Note: EXCLUDED_ARCHS[sdk=iphonesimulator*] and SWIFT_ENABLE_EXPLICIT_MODULES
  # are set on the Turnip target via withXcodeProject in this config plugin.`;

/** Apply EXCLUDED_ARCHS + SWIFT_ENABLE_EXPLICIT_MODULES to the Turnip app target. */
function withTurnipBuildSettings(config) {
  return withXcodeProject(config, (modConfig) => {
    const xcodeProject = modConfig.modResults;
    const configurations = xcodeProject.pbxXCBuildConfigurationSection();

    Object.keys(configurations).forEach((key) => {
      const buildConfig = configurations[key];
      if (
        buildConfig &&
        typeof buildConfig === 'object' &&
        buildConfig.buildSettings &&
        (buildConfig.buildSettings.PRODUCT_BUNDLE_IDENTIFIER === 'com.turnip.kids' ||
          buildConfig.buildSettings.PRODUCT_NAME === 'Turnip')
      ) {
        buildConfig.buildSettings['EXCLUDED_ARCHS[sdk=iphonesimulator*]'] = 'x86_64';
        buildConfig.buildSettings['SWIFT_ENABLE_EXPLICIT_MODULES'] = 'NO';
        buildConfig.buildSettings['ENABLE_USER_SCRIPT_SANDBOXING'] = 'NO';
      }
    });

    return modConfig;
  });
}

/** Patch Podfile post_install for BoringSSL + pod target EXCLUDED_ARCHS. */
function withPodfilePatch(config) {
  return withDangerousMod(config, [
    'ios',
    (modConfig) => {
      const podfilePath = path.join(modConfig.modRequest.platformProjectRoot, 'Podfile');

      if (!fs.existsSync(podfilePath)) return modConfig;

      let contents = fs.readFileSync(podfilePath, 'utf8');

      // Idempotent: skip if already patched
      if (contents.includes(SENTINEL)) return modConfig;

      // Match `post_install do |installer|` regardless of leading indentation
      contents = contents.replace(
        /^(\s*post_install do \|installer\|)/m,
        `$1\n${POST_INSTALL_PATCH}`
      );

      fs.writeFileSync(podfilePath, contents);
      return modConfig;
    },
  ]);
}

/** @type {import('@expo/config-plugins').ConfigPlugin} */
module.exports = function withBoringSSLFix(config) {
  config = withTurnipBuildSettings(config);
  config = withPodfilePatch(config);
  return config;
};

} // end if (!module.exports)
