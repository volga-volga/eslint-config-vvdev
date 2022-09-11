const base = require('./config-base');

module.exports = {
  ...base,
  plugins: ['react', 'react-native', 'react-native-globals', '@typescript-eslint','react-hooks'],
  extends: ['plugin:react-hooks/recommended', ...[
    './rules/best-practices',
    './rules/errors',
    './rules/es6',
    './rules/imports',
    './rules/node',
    './rules/react',
    './rules/react-native',
    './rules/style',
    './rules/strict',
    './rules/typescript',
    './rules/variables',
  ].map(require.resolve)],
};
