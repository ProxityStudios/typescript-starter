/** @type {import("eslint").ESLint.ConfigData} */
module.exports = {
  root: true,
  plugins: ['@typescript-eslint', 'import'],
  extends: [
    'airbnb-typescript/base',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  env: {
    node: true,
    es6: true,
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-namespace': 'off',
    'import/order': [
      'error',
      {
        groups: ['external', 'builtin', 'internal', 'sibling', 'parent', 'index'],
      },
    ],
  },
};
