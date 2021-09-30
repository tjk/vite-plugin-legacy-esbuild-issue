# vite-plugin-legacy-esbuild-issue

```bash
% pnpm i
% pnpm build
[31merror during build:[39m
[31mError: Can't use esbuild as the minifier when targeting legacy browsers because esbuild minification is not legacy safe.[39m
[31m    at Object.configResolved (/home/tjk/src/github.com/tjk/vite-plugin-legacy-esbuild-issue/node_modules/.pnpm/@vitejs+plugin-legacy@1.6.0_vite@2.6.2/node_modules/@vitejs/plugin-legacy/index.js:101:15)[39m
[31m    at /home/tjk/src/github.com/tjk/vite-plugin-legacy-esbuild-issue/node_modules/.pnpm/vite@2.6.2_fa61c471ed365d086e71b610b15aabb9/node_modules/vite/dist/node/chunks/dep-24231913.js:76446:127[39m
[31m    at Array.map (<anonymous>)[39m
[31m    at resolveConfig (/home/tjk/src/github.com/tjk/vite-plugin-legacy-esbuild-issue/node_modules/.pnpm/vite@2.6.2_fa61c471ed365d086e71b610b15aabb9/node_modules/vite/dist/node/chunks/dep-24231913.js:76446:35)[39m
[31m    at processTicksAndRejections (internal/process/task_queues.js:95:5)[39m
[31m    at async doBuild (/home/tjk/src/github.com/tjk/vite-plugin-legacy-esbuild-issue/node_modules/.pnpm/vite@2.6.2_fa61c471ed365d086e71b610b15aabb9/node_modules/vite/dist/node/chunks/dep-24231913.js:51168:20)[39m
[31m    at async build (/home/tjk/src/github.com/tjk/vite-plugin-legacy-esbuild-issue/node_modules/.pnpm/vite@2.6.2_fa61c471ed365d086e71b610b15aabb9/node_modules/vite/dist/node/chunks/dep-24231913.js:51156:16)[39m
[31m    at async CAC.<anonymous> (/home/tjk/src/github.com/tjk/vite-plugin-legacy-esbuild-issue/node_modules/.pnpm/vite@2.6.2_fa61c471ed365d086e71b610b15aabb9/node_modules/vite/dist/node/cli.js:740:9)[39m
```
