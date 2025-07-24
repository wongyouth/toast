import { resolve } from 'node:path'
/// <reference types="vitest" />
import camelCase from 'camelcase'
import { defineConfig } from 'vite'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import dts from 'vite-plugin-dts'
import packageJson from './package.json'

const packageName = packageJson.name.split('/').pop() || packageJson.name

const addFormat = {
  name: 'add-format',
  generateBundle(outputOptions, bundle) {
    for (const fileName in bundle) {
      const file = bundle[fileName]
      // Check if it's an IIFE bundle
      if (outputOptions.format === 'iife' && file.type === 'chunk') {
        file.code = `(() => {
  var BUILD_FORMAT = "${outputOptions.format}";
  ${file.code};
})()`
      }
    }
  },
}

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs', 'umd', 'iife'],
      name: camelCase(packageName, { pascalCase: true }),
      fileName: packageName,
    },
  },
  plugins: [dts({ rollupTypes: true }), cssInjectedByJsPlugin(), addFormat],
  test: {
    environment: 'jsdom',
  },
})
