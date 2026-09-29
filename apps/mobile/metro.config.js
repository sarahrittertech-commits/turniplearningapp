const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const projectRoot = __dirname;
const monorepoRoot = path.resolve(projectRoot, '../..');

const config = getDefaultConfig(projectRoot);

// Watch all files within the monorepo so Metro can resolve pnpm-stored packages
config.watchFolders = [monorepoRoot];

// Tell Metro where to look for node_modules — monorepo root first (pnpm store)
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(monorepoRoot, 'node_modules'),
];

// When the HMR server registers the entry point, Metro resolves the pnpm virtual
// store path (e.g. ./node_modules/.pnpm/expo-router@.../entry) as if it were
// relative to apps/mobile/ — but the actual files live at the monorepo root.
// Intercept those resolutions and re-anchor them to the monorepo root.
config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (
    moduleName.startsWith('./node_modules/.pnpm/') ||
    moduleName.startsWith('../node_modules/.pnpm/')
  ) {
    return context.resolveRequest(
      { ...context, originModulePath: path.join(monorepoRoot, 'package.json') },
      moduleName,
      platform
    );
  }
  return context.resolveRequest(context, moduleName, platform);
};


module.exports = config;
