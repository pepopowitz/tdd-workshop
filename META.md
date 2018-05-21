# About this repository

## Setting up Jest

Jest is currently set up for you in this project. If you're interested in how it was set up:

### 1. `npm install --save-dev jest babel-core babel-jest babel-preset-env`

Several packages are installed via NPM.

* `jest` - this is the Jest library itself.
* `babel-core` - this is the core of BabelJs. It allows us to use modern JavaScript features, and not worry about old browsers not understanding them.
* `babel-jest` - this is an adapter to connect Babel with Jest, so our tests can run our modern JavaScript code.
* `babel-preset-env` - this is a preset for Babel. It allows us to tell Babel to figure out how it needs to transpile code for the current environment.

### 2. `.babelrc` file added

We add a .babelrc file, which configures the babel-preset-env preset.

### 3. Test scripts added to `package.json`. 

We add a handful of scripts to npm, all for running our tests via Jest.

* `test` - runs all tests in the project, one time.
* `test-watch-all` - runs all tests in the project, in watch mode.
* `test-watch-module-1` - runs only module-1 tests, in watch mode.
* `test-watch-module-2` - runs only module-2 tests, in watch mode.
* ...