import path from 'path'
import { defineConfig } from 'vite'
import vuePlugin from '@vitejs/plugin-vue'
import legacyPlugin from '@vitejs/plugin-legacy'
import { vueI18nPlugin } from './CustomBlockPlugin'

export default defineConfig({
  resolve: {
    alias: {
      '/@': __dirname
    }
  },
  plugins: [
    vuePlugin({
      refTransform: true
    }),
    legacyPlugin(),
    vueI18nPlugin
  ],
  css: {
    modules: {
      localsConvention: 'camelCaseOnly'
    }
  }
})
