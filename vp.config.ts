import { defineConfig } from 'viteplus/config';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'RYPUI',
      formats: ['es', 'cjs'],
    },
    types: true,
    minify: true,
    sourcemap: true,
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/tests/setup.ts'],
    coverage: {
      enabled: true,
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'src/mocks/'],
    },
  },
  storybook: {
    enabled: true,
    port: 6006,
    open: true,
  },
  optimize: {
    preBundle: true,
    external: ['react', 'react-dom'],
  },
  typescript: {
    strict: true,
    compilerOptions: {
      noImplicitAny: true,
      strictNullChecks: true,
      strictFunctionTypes: true,
    },
  },
});