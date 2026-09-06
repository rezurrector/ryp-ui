import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  sourcemap: true,
  minify: true,
  splitting: true,
  external: ['react', 'react-dom'],
  banner: {
    js: '/*! @ryp/ui - v' + process.env.npm_package_version + ' */',
  },
});