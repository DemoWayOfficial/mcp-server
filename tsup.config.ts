import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  banner: {
    js: '#!/usr/bin/env node',
  },
  format: 'esm',
  shims: true,
  clean: true,
});
