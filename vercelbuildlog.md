12:55:16.577 Running build in Washington, D.C., USA (East) – iad1
12:55:16.577 Build machine configuration: 2 cores, 8 GB
12:55:16.588 Cloning github.com/RichStudios/brightstarz (Branch: main, Commit: c32e205)
12:55:16.589 Skipping build cache, deployment was triggered without cache.
12:55:21.101 Cloning completed: 4.513s
12:55:21.656 Running "vercel build"
12:55:22.635 Vercel CLI 50.4.8
12:55:23.136 Running "install" command: `npm install`...
12:55:26.937 npm warn deprecated w3c-hr-time@1.0.2: Use your platform's native performance.now() and performance.timeOrigin.
12:55:27.346 npm warn deprecated stable@0.1.8: Modern JS already guarantees Array#sort() is a stable sort, so this library is deprecated. See the compatibility table on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#browser_compatibility
12:55:27.411 npm warn deprecated sourcemap-codec@1.4.8: Please use @jridgewell/sourcemap-codec instead
12:55:27.602 npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
12:55:27.665 npm warn deprecated rollup-plugin-terser@7.0.2: This package has been deprecated and is no longer maintained. Please use @rollup/plugin-terser
12:55:27.881 npm warn deprecated q@1.5.1: You or someone you depend on is using Q, the JavaScript Promise library that gave JavaScript developers strong feelings about promises. They can almost certainly migrate to the native JavaScript promise now. Thank you literally everyone for joining me in this bet against the odds. Be excellent to each other.
12:55:27.883 npm warn deprecated
12:55:27.883 npm warn deprecated (For a CapTP with native promises, see @endo/eventual-send and @endo/captp)
12:55:28.413 npm warn deprecated workbox-cacheable-response@6.6.0: workbox-background-sync@6.6.0
12:55:28.678 npm warn deprecated workbox-google-analytics@6.6.0: It is not compatible with newer versions of GA starting with v4, as long as you are using GAv3 it should be ok, but the package is not longer being maintained
12:55:29.378 npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
12:55:29.645 npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
12:55:30.155 npm warn deprecated domexception@2.0.1: Use your platform's native DOMException instead
12:55:30.950 npm warn deprecated abab@2.0.6: Use your platform's native atob() and btoa() methods instead
12:55:31.485 npm warn deprecated svgo@1.3.2: This SVGO version is no longer supported. Upgrade to v2.x.x.
12:55:31.625 npm warn deprecated @humanwhocodes/object-schema@2.0.3: Use @eslint/object-schema instead
12:55:31.691 npm warn deprecated @humanwhocodes/config-array@0.13.0: Use @eslint/config-array instead
12:55:32.261 npm warn deprecated @babel/plugin-proposal-numeric-separator@7.18.6: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-numeric-separator instead.
12:55:32.283 npm warn deprecated @babel/plugin-proposal-optional-chaining@7.21.0: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-optional-chaining instead.
12:55:32.284 npm warn deprecated @babel/plugin-proposal-nullish-coalescing-operator@7.18.6: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-nullish-coalescing-operator instead.
12:55:32.284 npm warn deprecated @babel/plugin-proposal-private-methods@7.18.6: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-private-methods instead.
12:55:32.287 npm warn deprecated @babel/plugin-proposal-class-properties@7.18.6: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-class-properties instead.
12:55:33.400 npm warn deprecated @babel/plugin-proposal-private-property-in-object@7.21.11: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-private-property-in-object instead.
12:55:33.480 npm warn deprecated source-map@0.8.0-beta.0: The work that was done in this beta branch won't be included in future versions
12:55:35.854 npm warn deprecated eslint@8.57.1: This version is no longer supported. Please see https://eslint.org/version-support for other options.
12:55:39.129 
12:55:39.130 added 1349 packages, and audited 1350 packages in 16s
12:55:39.130 
12:55:39.130 271 packages are looking for funding
12:55:39.130   run `npm fund` for details
12:55:39.170 
12:55:39.170 17 vulnerabilities (5 moderate, 12 high)
12:55:39.171 
12:55:39.171 To address issues that do not require attention, run:
12:55:39.171   npm audit fix
12:55:39.171 
12:55:39.171 To address all issues (including breaking changes), run:
12:55:39.172   npm audit fix --force
12:55:39.172 
12:55:39.172 Run `npm audit` for details.
12:55:39.172 npm notice
12:55:39.172 npm notice New major version of npm available! 10.9.4 -> 11.7.0
12:55:39.173 npm notice Changelog: https://github.com/npm/cli/releases/tag/v11.7.0
12:55:39.173 npm notice To update run: npm install -g npm@11.7.0
12:55:39.173 npm notice
12:55:39.508 
12:55:39.508 > brightstarz-production@0.1.0 build
12:55:39.508 > react-scripts build
12:55:39.508 
12:55:40.038 [baseline-browser-mapping] The data in this module is over two months old.  To ensure accurate Baseline data, please update: `npm i baseline-browser-mapping@latest -D`
12:55:40.804 Creating an optimized production build...
12:55:56.893 [baseline-browser-mapping] The data in this module is over two months old.  To ensure accurate Baseline data, please update: `npm i baseline-browser-mapping@latest -D`
12:55:57.623 
12:55:57.627 Treating warnings as errors because process.env.CI = true.
12:55:57.627 Most CI servers set it automatically.
12:55:57.627 
12:55:57.631 Failed to compile.
12:55:57.631 
12:55:57.633 [eslint] 
12:55:57.633 src/components/layout/Footer.tsx
12:55:57.633   Line 34:15:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
12:55:57.633 
12:55:57.633 src/pages/Contact.tsx
12:55:57.633   Line 255:19:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
12:55:57.633 
12:55:57.633 src/pages/Gallery.tsx
12:55:57.633   Line 36:9:  'getFilteredPhotos' is assigned a value but never used  @typescript-eslint/no-unused-vars
12:55:57.633 
12:55:57.633 
12:55:57.675 Error: Command "npm run build" exited with 1