[![Build Status](https://travis-ci.org/pubcore/generator-js.svg?branch=master)](https://travis-ci.org/pubcore/generator-js)

## Commandline tool to scaffolding new packages

### Prerequisites

- latest version of nodejs
- latest version of npm

### Yeoman generator to create a package scaffolding for ECMAScript, with

- eslint
- prettier with husky pre-commit hook
- transpiler via esbuild
- running tests via mocha
- running show code coverage after test run

### Install it global

```
npm install -g yo @pubcore/generator-js
```

### How to use

1. within your scope directoy craete a new one (convention: lower case and dash-separated)

```
mkdir new-project
```

2. and change into it

```
cd new-project
```

3. execute

```
yo @pubcore/js
```

4. (optional) if your code already exists, copy it into src/index.js.
   (Keep the entry point file 'src/index.js' because of config dependencies)
