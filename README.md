# eslint-config-vvdev

## Installation

### Install eslint:

    yarn add --D eslint

### Add scripts in package.json

    "lint": "node_modules/.bin/eslint ./${SOURCES} --ext .js,.jsx",
    "lintfix": "node_modules/.bin/eslint ./${SOURCES} --ext .js,.jsx --fix"

where `${SOURCES}` is root of linted code

### Create file .eslintrc with next content:
```
{
  "extends": "vvdev"
}
```

Be default used react-native eslint config. To use another config you can specify environment:
```
"extends": "vvdev/react-native", // react-native
"extends": "vvdev/node", // node-js
```

## Usage

Use one of the next commands

    yarn run lint

## Auto check before commit

See [husky](https://www.npmjs.com/package/husky)    

## TODO:

- [] [sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs) plugin 
- [] Include React JS config
