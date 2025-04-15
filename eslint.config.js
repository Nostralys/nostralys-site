// eslint.config.js
import angular from '@angular-eslint/eslint-plugin';
import angularTemplate from '@angular-eslint/eslint-plugin-template';
import parser from '@angular-eslint/template-parser';
import prettier from 'eslint-config-prettier';
import js from '@eslint/js';

export default [
  js.configs.recommended,

  // 👉 Fichiers TypeScript applicatifs (src/)
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: (await import('@typescript-eslint/parser')).default,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
      globals: {
        console: true,
        window: true,
        document: true,
      },
    },
    plugins: {
      '@angular-eslint': angular,
    },
    rules: {
      ...angular.configs.recommended.rules,
      'no-console': 'warn',
      'no-debugger': 'error',
    },
  },

  // 👉 Fichiers de test (spec.ts)
  {
    files: ['src/**/*.spec.ts'],
    languageOptions: {
      parser: (await import('@typescript-eslint/parser')).default,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
      globals: {
        describe: true,
        it: true,
        beforeEach: true,
        expect: true,
        jasmine: true,
      },
    },
    plugins: {
      '@angular-eslint': angular,
    },
    rules: {
      ...angular.configs.recommended.rules,
    },
  },

  // 👉 Templates HTML Angular
  {
    files: ['src/**/*.html'],
    languageOptions: {
      parser: parser,
    },
    plugins: {
      '@angular-eslint/template': angularTemplate,
    },
    rules: {
      ...angularTemplate.configs.recommended.rules,
    },
  },

  // 👉 Prettier
  prettier,
];
