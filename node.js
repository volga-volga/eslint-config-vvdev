const base = require('./config-base');

module.exports = {
  ...base,
  parser: undefined,
  plugins: ['@typescript-eslint'],
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/es6',
    './rules/imports',
    './rules/node',
    './rules/style',
    './rules/strict',
    './rules/typescript',
    './rules/variables',
  ].map(require.resolve),
  rules: {
    indent: ['error', 4],
    'no-console': 'warn',
    'arrow-body-style': 'off',
    'no-restricted-properties': 'off',
    'no-restricted-globals': 'off',
    'func-names': 'off',
    'global-require': 'off',
    'no-param-reassign': 'warn',
    eqeqeq: 'warn',
    radix: 'warn',
    'no-return-await': 'warn',
    'import/order': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
  }
};
