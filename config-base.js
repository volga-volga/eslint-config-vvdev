module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.tsx',
          '.ts',
        ],
      },
    },
  },
  env: {es6: true},
  globals: {
    __static: false,
    webview: false,
    localStorage: false,
    IntervalID: false,
    TimeoutID: false,
    Class: false,
    FileReader: false,
    Event: false,
    HTMLInputElement: false,
    FormData: false,
    HTMLTextAreaElement: false,
    Element: false,
    File: false,
    fetch: false,
    __DEV__: false,
    btoa: false,
    alert: false,
    window: false,
    document: false,
    XMLHttpRequest: false,
    WebSocket: false,
  },
};
