# vite-plugin-legacy-esbuild-issue

```bash
% pnpm i
% pnpm build
error during build:
Error: Can't use esbuild as the minifier when targeting legacy browsers because esbuild minification is not legacy safe.
    at Object.configResolved (/home/tjk/src/github.com/tjk/vite-plugin-legacy-esbuild-issue/node_modules/.pnpm/@vitejs+plugin-legacy@1.6.0_vite@2.6.2/node_modules/@vitejs/plugin-legacy/index.js:101:15)
    at /home/tjk/src/github.com/tjk/vite-plugin-legacy-esbuild-issue/node_modules/.pnpm/vite@2.6.2_fa61c471ed365d086e71b610b15aabb9/node_modules/vite/dist/node/chunks/dep-24231913.js:76446:127
    at Array.map (<anonymous>)
    at resolveConfig (/home/tjk/src/github.com/tjk/vite-plugin-legacy-esbuild-issue/node_modules/.pnpm/vite@2.6.2_fa61c471ed365d086e71b610b15aabb9/node_modules/vite/dist/node/chunks/dep-24231913.js:76446:35)
    at processTicksAndRejections (internal/process/task_queues.js:95:5)
    at async doBuild (/home/tjk/src/github.com/tjk/vite-plugin-legacy-esbuild-issue/node_modules/.pnpm/vite@2.6.2_fa61c471ed365d086e71b610b15aabb9/node_modules/vite/dist/node/chunks/dep-24231913.js:51168:20)
    at async build (/home/tjk/src/github.com/tjk/vite-plugin-legacy-esbuild-issue/node_modules/.pnpm/vite@2.6.2_fa61c471ed365d086e71b610b15aabb9/node_modules/vite/dist/node/chunks/dep-24231913.js:51156:16)
    at async CAC.<anonymous> (/home/tjk/src/github.com/tjk/vite-plugin-legacy-esbuild-issue/node_modules/.pnpm/vite@2.6.2_fa61c471ed365d086e71b610b15aabb9/node_modules/vite/dist/node/cli.js:740:9)
```
