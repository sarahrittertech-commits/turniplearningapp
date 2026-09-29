# Turnip — System Design Documentation

*Generated: February 2026. Covers project architecture, technical decisions, build environment, and current status.*

---

## 1. Project Overview

**Turnip** is a kids' video streaming iPad app, paired with a web-based admin dashboard for content management. The product is designed for landscape-only iPad use with a child-friendly UI and parental controls baked in via Firebase Auth.

### Goals
- Curated, safe video content for children, streamed on iPads
- Multiple child profiles per household, each with their own watch history
- Admin dashboard for parents/operators to upload and manage content
- Video hosted and delivered via Mux (not stored in Firebase)

---

## 2. Monorepo Structure

```
turnip-kids-app/              ← pnpm workspace root
├── apps/
│   ├── mobile/               ← iPad app (Expo / React Native)
│   └── admin/                ← Content management dashboard (Next.js)
├── packages/
│   └── shared/               ← Shared TypeScript types and utilities
├── package.json              ← Workspace root (pnpm, engines: node ≥20, pnpm ≥10)
└── pnpm-workspace.yaml
```

**Package manager:** pnpm (strict, non-hoisted node_modules). This is the source of most of the iOS build complexity — see Section 7.

---

## 3. Architecture

### 3.1 Data & Auth — Firebase

| Service | Purpose |
|---|---|
| **Firebase Auth** | User authentication, profile sessions |
| **Cloud Firestore** | Database: video metadata, user profiles, watch history, parental controls |

Firebase is used for everything *except* actual video files. Video metadata (title, description, thumbnail URL, Mux playback ID) lives in Firestore. The native Firebase SDK is integrated via `@react-native-firebase` (not the JS-only firebase package), which requires static framework linking on iOS.

### 3.2 Video — Mux

Mux hosts, transcodes, and delivers all video content. The mobile app receives a **Mux playback ID** from Firestore and constructs an HLS URL for `react-native-video` to play. Mux handles:
- Adaptive bitrate streaming (HLS)
- Thumbnail generation
- Playback analytics

The admin app uploads video to Mux directly (via Mux's API or upload UI), then stores the resulting playback ID in Firestore.

### 3.3 Mobile App — React Native / Expo

**Framework:** Expo 51 (SDK 51) with React Native 0.74.5
**Routing:** Expo Router v3 (file-based, like Next.js App Router)
**JS Engine:** Hermes (compiled bytecode, faster startup)

**Screen structure (file-based routing):**
```
app/
├── _layout.tsx              ← Root layout, splash screen, font loading
├── (tabs)/
│   ├── _layout.tsx          ← Tab bar layout
│   ├── index.tsx            ← Home screen (video grid)
│   ├── library.tsx          ← Saved / downloaded content
│   └── search.tsx           ← Search
├── profile/
│   └── select.tsx           ← Profile selector
└── video/
    └── [id].tsx             ← Video player screen (dynamic route)
```

**iPad-specific config (`app.json`):**
- `orientation: landscape` — locked to landscape
- `requireFullScreen: true` — no split-screen multitasking
- `UISupportedInterfaceOrientations~ipad: [LandscapeLeft, LandscapeRight]`
- `supportsTablet: true`
- Bundle ID: `com.turnip.kids`

### 3.4 Admin Dashboard — Next.js

**Framework:** Next.js 14 (App Router)
**Shared types** from `@turnip/shared` workspace package

Planned functionality:
- Upload video to Mux, save playback ID to Firestore
- Manage video metadata (title, description, age rating, thumbnail)
- Manage child profiles and parental controls

---

## 4. Mobile Dependency Map

### Navigation & UI
| Package | Version | Role |
|---|---|---|
| expo-router | 3.5 | File-based navigation |
| react-native-screens | 3.31 | Native screen containers |
| react-native-safe-area-context | 4.10 | Safe area insets (iPad home indicator) |
| react-native-gesture-handler | 2.16 | Native touch/gesture recognition |
| react-native-reanimated | 3.10 | 60fps UI-thread animations |
| expo-linear-gradient | 13 | Gradient overlays |
| expo-font | 12 | Custom font loading |
| expo-splash-screen | 0.27 | Controlled launch screen |

### Video
| Package | Version | Role |
|---|---|---|
| react-native-video | 6.4 | HLS video player (plays Mux streams) |

### Firebase / Backend
| Package | Version | Role |
|---|---|---|
| @react-native-firebase/app | 20.3 | Firebase core initialization |
| @react-native-firebase/auth | 20.3 | Authentication |
| @react-native-firebase/firestore | 20.3 | Database reads/writes |

### Storage & Tasks
| Package | Version | Role |
|---|---|---|
| expo-secure-store | 13 | Encrypted token/session storage |
| @react-native-async-storage/async-storage | 1.23 | Non-sensitive local storage |
| expo-file-system | 17 | Local file access (video cache) |
| expo-background-fetch | 12 | Background data sync |
| expo-task-manager | 11.8 | Background task registration |

### Build-time
| Package | Role |
|---|---|
| expo-build-properties | Sets `useFrameworks: static` on iOS (required for Firebase) |
| expo-constants | Runtime app config, device info |
| expo-linking | Deep link handling |

---

## 5. iOS Native Build System

### Tools
| Tool | Version | Role |
|---|---|---|
| Xcode | 26.2 (beta) | IDE and compiler toolchain |
| CocoaPods | 1.16.2 | iOS native dependency manager |
| clang | 26 (Xcode 26) | C/C++/ObjC compiler |
| Ruby | 4.0.1 | CocoaPods runtime (Podfile is Ruby DSL) |
| Node | 24.13.1 (via nvm) | Required by CocoaPods autolinking scripts |

### Key iOS Build Settings
| Setting | Value | Reason |
|---|---|---|
| `EXCLUDED_ARCHS[sdk=iphonesimulator*]` | `x86_64` | Apple Silicon Macs run simulator as arm64 natively; excluding x86_64 prevents a useless second compilation that triggers clang issues |
| `SWIFT_ENABLE_EXPLICIT_MODULES` | `NO` | Xcode 16+ EBM pre-scans Swift imports before pods compile; disabling falls back to dependency-order compilation |
| `use_frameworks! :linkage => :static` | required | Firebase pods require static framework linking |
| `IPHONEOS_DEPLOYMENT_TARGET` | 13.4 | Minimum iOS version |
| `CLANG_CXX_LANGUAGE_STANDARD` | `c++20` | Set by react_native_post_install |

### DerivedData
`Turnip-frhtayiphgjasgcfbvpgnioldzpk`

### Simulator
iPad Pro 13-inch (M4), iOS 26.2 — Device ID: `841E1154-03F5-4FDC-9B88-2D31BCC5DBD6`

**Known issue:** Xcode 26 fails to enumerate specific simulator UUIDs via `-showdestinations`. Workaround: use `-destination 'generic/platform=iOS Simulator'` with explicit `-sdk iphonesimulator26.2 ARCHS=arm64 ONLY_ACTIVE_ARCH=YES`.

---

## 6. Expo Config Plugin — `withBoringSSLFix`

**File:** `apps/mobile/plugins/withBoringSSLFix.js`

This custom Expo config plugin applies three build-time patches that are required for the project to compile on Xcode 16+/26. It runs during `expo prebuild` and during `expo run:ios`.

### Patch 1 — `withXcodeProject`: App Target Build Settings
Modifies `Turnip.xcodeproj/project.pbxproj` directly to set on the Turnip app target (both Debug and Release configurations):
- `EXCLUDED_ARCHS[sdk=iphonesimulator*] = x86_64`
- `SWIFT_ENABLE_EXPLICIT_MODULES = NO`

Matches target by `PRODUCT_BUNDLE_IDENTIFIER = com.turnip.kids` or `PRODUCT_NAME = Turnip`.

**Why needed:** The Ruby Xcodeproj gem approach in `post_install` was silently failing to modify the app target. Direct project.pbxproj editing via `withXcodeProject` is the reliable alternative.

### Patch 2 — `withDangerousMod`: Podfile post_install injection
Injects a `post_install` block into the Podfile (idempotent, guarded by sentinel comment `# [withBoringSSLFix] applied`) that:
- Strips `-GCC_WARN_INHIBIT_ALL_WARNINGS` from BoringSSL-GRPC per-file compiler flags
- Sets `EXCLUDED_ARCHS[sdk=iphonesimulator*] = x86_64` on all pod targets

**Why BoringSSL:** Firebase depends on gRPC which depends on BoringSSL. BoringSSL's podspec sets `-GCC_WARN_INHIBIT_ALL_WARNINGS` as a per-file compiler flag. Clang 16+ parses this as the unsupported `-G` flag when targeting the simulator, causing a build error. The fix strips the flag at the file level in `post_install`. Reference: [firebase-ios-sdk#12661](https://github.com/firebase/firebase-ios-sdk/issues/12661)

---

## 7. The pnpm + CocoaPods Header Problem

### Root Cause
This is the primary ongoing build blocker as of February 2026.

pnpm uses a non-hoisted, content-addressed `node_modules/.pnpm/<package-name>@<version>_<hash>/node_modules/` directory structure. React Native packages are therefore at deeply-nested paths like:

```
node_modules/.pnpm/react-native@0.74.5_@babel+core@7.29.0_.../node_modules/react-native/
```

CocoaPods' **"Copy Public Headers"** build phase calculates a `dstPath` for each header based on the source file's path relative to the source root. With pnpm's deeply-nested structure, this calculation produces a broken path that points nowhere inside the framework's `Headers/` directory. As a result:

- `react/debug/*.h` → **not installed** to `React_debug.framework/Headers/`
- `yoga/Yoga.h` → **not installed** to `yoga.framework/Headers/`
- `ReactCommon/TurboModule.h` → **not installed** to framework `Headers/`
- `react/renderer/graphics/Float.h` → **not installed** to `React_graphics.framework/Headers/`

In a standard npm (hoisted) setup, CocoaPods would symlink these to `$(PODS_ROOT)/Headers/Public/<pod-name>/` making them globally accessible. With pnpm this mechanism is broken.

### Fix Applied (Podfile `post_install`)
Add the ReactCommon source directories directly to `HEADER_SEARCH_PATHS` on all pod targets, so the compiler finds headers from source rather than the (broken) installed framework headers:

```ruby
rn_rc = "$(PODS_ROOT)/../../node_modules/react-native/ReactCommon"
extra_header_paths = [
  "\"#{rn_rc}\"",                          # react/debug/*, react/renderer/*, etc.
  "\"#{rn_rc}/yoga\"",                     # yoga/Yoga.h
  "\"#{rn_rc}/react/nativemodule/core\"",  # ReactCommon/TurboModule.h etc.
].join(' ')
```

Applied to ALL pod targets (not just React-prefixed ones), because non-React pods like `react-native-safe-area-context` also fail when Xcode scans the `React` module and encounters missing yoga headers.

**Note:** `$(PODS_ROOT)/../../node_modules/react-native` resolves to `apps/mobile/node_modules/react-native/` which pnpm symlinks correctly from the workspace root.

### Remaining Issue
As of the last build attempt, `react/renderer/graphics/Float.h` was not found during compilation of `React-Fabric`. This file lives at:
```
ReactCommon/react/renderer/graphics/platform/ios/react/renderer/graphics/Float.h
```
Adding `$(PODS_ROOT)/../../node_modules/react-native/ReactCommon/react/renderer/graphics/platform/ios` to the paths should fix it. There may be additional paths needed after that.

**Recommended next step:** Replace the manually-maintained path list with a Ruby `Dir.glob` that dynamically enumerates all ReactCommon subdirectories containing `.h` files, eliminating the whack-a-mole pattern entirely.

---

## 8. The gRPC / clang 26 Template Error

### Problem
Xcode 26's clang 26 compiler is stricter about C++ template keyword syntax. gRPC-Core and gRPC-C++ contain code in `src/core/lib/promise/detail/basic_seq.h` (line 103) that uses the `template` keyword in a way that clang 26 rejects with:

```
error: a template argument list is expected after a name prefixed by the template keyword
[-Wmissing-template-arg-list-after-template-kw]
```

### Fix Applied (Podfile `post_install`, runs AFTER `react_native_post_install`)
```ruby
installer.pods_project.targets.each do |target|
  if target.name.start_with?('gRPC')
    target.build_configurations.each do |build_config|
      flag = '-Wno-missing-template-arg-list-after-template-kw'
      # Handle Array (set by react_native_post_install) or String or nil
      existing = build_config.build_settings['OTHER_CPLUSPLUSFLAGS']
      if existing.is_a?(Array)
        build_config.build_settings['OTHER_CPLUSPLUSFLAGS'] = existing + [flag] unless existing.include?(flag)
      elsif existing.is_a?(String)
        build_config.build_settings['OTHER_CPLUSPLUSFLAGS'] = existing + " #{flag}" unless existing.include?('Wmissing-template...')
      else
        build_config.build_settings['OTHER_CPLUSPLUSFLAGS'] = "$(inherited) #{flag}"
      end
    end
  end
end
```

**Important:** Must run AFTER `react_native_post_install` because that function sets `OTHER_CPLUSPLUSFLAGS` as a Ruby `Array`. Setting it to a `String` beforehand causes `react_native_post_install` to crash with `no implicit conversion of String into Array`.

Applies to: `gRPC-Core`, `gRPC-C++`, and any future gRPC pods (matched by `start_with?('gRPC')`).

---

## 9. Build Error History (Resolved → Pending)

| # | Error | Status | Fix |
|---|---|---|---|
| 1 | `BoringSSL-GRPC: clang: error: unsupported option '-G'` | ✅ Fixed | Strip `-GCC_WARN_INHIBIT_ALL_WARNINGS` from per-file compiler flags in post_install |
| 2 | `ExpoModulesProvider.swift: Unable to find module dependency: 'ExpoModulesCore'` | ✅ Fixed | `SWIFT_ENABLE_EXPLICIT_MODULES = NO` + `EXCLUDED_ARCHS[sdk=iphonesimulator*] = x86_64` on Turnip app target |
| 3 | Xcodeproj gem silently not modifying app target | ✅ Fixed | Switched from Ruby gem approach to `withXcodeProject` in config plugin; directly edited project.pbxproj |
| 4 | `xcodebuild: Unable to find destination { id: 841E1154-... }` | ✅ Workaround | Use `-destination 'generic/platform=iOS Simulator'` instead of specific UUID |
| 5 | `react/debug/react_native_assert.h: file not found` | ✅ Fixed | Added `ReactCommon` to HEADER_SEARCH_PATHS of React C++ pod targets |
| 6 | `yoga/Yoga.h: file not found` (in react-native-safe-area-context scan) | ✅ Fixed | Added `ReactCommon/yoga` to HEADER_SEARCH_PATHS of ALL pod targets |
| 7 | `ReactCommon/TurboModule.h: file not found` | ✅ Fixed | Added `ReactCommon/react/nativemodule/core` to HEADER_SEARCH_PATHS |
| 8 | `gRPC-Core basic_seq.h: template argument list expected` | ✅ Fixed | Added `-Wno-missing-template-arg-list-after-template-kw` to gRPC* OTHER_CPLUSPLUSFLAGS |
| 9 | `gRPC-C++ basic_seq.h: template argument list expected` | ✅ Fixed | Same fix, matched with `start_with?('gRPC')` |
| 10 | `react/renderer/graphics/Float.h: file not found` (React-Fabric) | ⏳ Pending | Add `ReactCommon/react/renderer/graphics/platform/ios` to header paths |

---

## 10. Key File Locations

| File | Purpose |
|---|---|
| `apps/mobile/app.json` | Expo config: bundle ID, orientation, plugins, iOS settings |
| `apps/mobile/ios/Podfile` | CocoaPods dependency manifest + all post_install patches |
| `apps/mobile/ios/Turnip.xcodeproj/project.pbxproj` | Xcode project file (direct edits for EXCLUDED_ARCHS, SWIFT_ENABLE_EXPLICIT_MODULES on app target) |
| `apps/mobile/ios/Turnip.xcworkspace` | Workspace used for building (includes Pods project) |
| `apps/mobile/plugins/withBoringSSLFix.js` | Custom Expo config plugin |
| `packages/shared/src/index.ts` | Shared type exports |

---

## 11. What Is Not Yet Done

### Firebase Setup
- `GoogleService-Info.plist` not yet added to the iOS project
- Firestore collections not yet defined (videos, profiles, watchHistory)
- Firebase Auth not yet wired to the profile select screen

### UI / Screens
- Home screen (`index.tsx`) — video grid, not yet wired to Firestore
- Profile selector (`profile/select.tsx`) — UI scaffold only
- Video player screen (`video/[id].tsx`) — route exists, player not implemented
- Library and Search screens — scaffolded

### Admin Dashboard
- Next.js app created but has no implemented pages
- No Mux upload flow
- No Firestore content management UI

### Build
- Local simulator build not yet succeeding (see Section 9, item 10)
- No Apple Developer account / provisioning set up yet
- No physical device build tested

---

## 12. Recommended Next Steps (Priority Order)

1. **Fix remaining header path issue** — add `ReactCommon/react/renderer/graphics/platform/ios` (and ideally replace the manual path list with a `Dir.glob` in the Podfile)
2. **Get simulator build succeeding** — confirm app launches in simulator
3. **Add `GoogleService-Info.plist`** — initialize Firebase in the app
4. **Wire home screen to Firestore** — display real video data
5. **Implement profile selector** — connect to Firebase Auth
6. **Implement video player** — feed Mux HLS URL into `react-native-video`
7. **Admin dashboard** — Mux upload + Firestore content management

---

*Document reflects state of codebase as of February 2026. Environment: macOS, Xcode 26.2 beta, CocoaPods 1.16.2, Node 24.13.1 (nvm), pnpm 10+, Ruby 4.0.1.*
