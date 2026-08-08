// @ts-check
import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig({
  files: ['**/*.ts'],
  extends: [js.configs.recommended, tseslint.configs.recommendedTypeChecked, eslintConfigPrettier],
  languageOptions: {
    parserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },
  rules: {
    // Backend code lives and dies by whether async failures are handled.
    // An un-awaited, uncaught promise inside a request handler can crash
    // the process or silently swallow an error — these turn that into a
    // lint failure instead of a production incident.
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-misused-promises': 'error',
  },
});
