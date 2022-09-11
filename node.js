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
};
