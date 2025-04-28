module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: [
      'eslint:recommended',              // Default ESLint rules
      'plugin:@typescript-eslint/recommended', // TypeScript specific rules
      'plugin:react/recommended',         // React specific rules
      'plugin:react-hooks/recommended',   // React hooks rules
      'prettier',                         // Turns off rules that might conflict with Prettier
      'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier
    ],
    parserOptions: {
      ecmaVersion: 'latest',              // Allow latest ECMAScript features
      sourceType: 'module',               // Allow imports
      ecmaFeatures: {
        jsx: true,                        // Enable JSX
      },
    },
    settings: {
      react: {
        version: 'detect',                // Automatically detects React version
      },
    },
    rules: {
      // Example of custom rules
      'react/prop-types': 'off',  // Disable prop-types for TypeScript
      '@typescript-eslint/no-unused-vars': 'warn',  // Warn on unused vars
      'prettier/prettier': ['error', { singleQuote: true }],
    },
    env: {
      browser: true,        // Enable browser globals
      node: true,           // Enable Node.js globals
      es2021: true,         // Enable ES2021 globals
    },
  }
  