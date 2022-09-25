const prettierOptions = require('./.prettierrc.js');

module.exports = {
  plugins: ['prettier', 'import', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      classes: true,
      impliedStrict: true,
      experimentalObjectRestSpread: true,
    },
  },
  env: {
    es2021: true,
    browser: true,
  },
  rules: {
    'prettier/prettier': ['warn', prettierOptions],
    'max-len': ['warn', { code: 120 }],

    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],

    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { 'args': 'after-used', 'ignoreRestSiblings': true }],

    '@typescript-eslint/ban-types': [
      'warn',
      {
        types: {
          object: false,
        },
      },
    ],

    'import/order': [
      'error',
      {
        'newlines-between': 'always',

        alphabetize: {
          order: 'desc',
          caseInsensitive: false,
        },

        groups: [
          'external',
          ['internal'],
          ['parent', 'builtin'],
          'type',
          'sibling',
          'object',
          'index',
        ],

        pathGroups: [
          {
            pattern: '@/icons/**',
            group: 'sibling',
            position: 'before',
          },
          {
            pattern: '@/images/**',
            group: 'sibling',
            position: 'before',
          },
          {
            pattern: '@/pages/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/resources/**',
            group: 'sibling',
            position: 'before',
          },
          {
            pattern: '@/utils/**',
            group: 'sibling',
            position: 'before',
          },
          {
            pattern: '@/hooks/**',
            group: 'sibling',
            position: 'before',
          },
          {
            pattern: '@/effects/**',
            group: 'sibling',
            position: 'before',
          },
          {
            pattern: '@/components/**',
            group: 'internal',
            position: 'before',
          },
        ],
      },
    ],

    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
        shorthandFirst: true,
        ignoreCase: true,
        noSortAlphabetically: false,
      },
    ],
  },
};

