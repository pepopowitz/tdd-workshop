# tdd-workshop
This project contains materials for my TDD workshop, "Building Quality JavaScript With Test-Driven Development."

The materials are divided into 6 modules. Start by reading the [Module 0: Setup](./module-0/README.md) instructions. 

If you are unable to complete [Module 0: Setup](./module-0/README.md), please raise your hand (if in-person), or create an issue according to the instructions in [Module 0: Setup](./module-0/README.md) (if not in-person). 

Once you complete [Module 0: Setup](./module-0/README.md), work through Modules 1-5.



## Modules

### [Module 0: Setup](./module-0/README.md)

This module will get you set up for the workshop. [Start here!](./module-0/README.md)

### [Module 1: Jest](./module-1/README.md)

An introduction to Jest's interactive watch mode. This module will get you comfortable with running tests.

### [Module 2: TDD Demo](./module-2/README.md)

An instructor-led demonstration of TDD. You'll experience the red-green-refactor feedback loop.

### [Module 3: Code Kata](./module-3/README.md)

A small problem that will help get you in the habit of writing tests first.

### [Module 4: Solving Problems Together - Conway's Game Of Life](./module-4/README.md)

A more complicated problem to give you more TDD experience.

### [Module 5: Real-life TDD](./module-5/README.md)

Real-life problems aren't always easy to test. This module will teach you how to isolate things you can't control, and use TDD in the real world.

## Notes

todo - move this to a resources.md?

### Setting up Jest

Jest is currently set up for you in this project. If you're interested in how it was set up:

#### 1. `npm install --save-dev jest babel-core babel-jest babel-preset-env`

Several packages are installed via NPM.

* `jest` - this is the Jest library itself.
* `babel-core` - this is the core of BabelJs. It allows us to use modern JavaScript features, and not worry about old browsers not understanding them.
* `babel-jest` - this is an adapter to connect Babel with Jest, so our tests can run our modern JavaScript code.
* `babel-preset-env` - this is a preset for Babel. It allows us to tell Babel to figure out how it needs to transpile code for the current environment.

#### 2. `.babelrc` file added

We add a .babelrc file, which configures the babel-preset-env preset.

#### 3. Test scripts added to `package.json`. 

We add a handful of scripts to npm, all for running our tests via Jest.

* `test` - runs all tests in the project, one time.
* `test-watch-all` - runs all tests in the project, in watch mode.
* `test-watch-module-1` - runs only module-1 tests, in watch mode.
* `test-watch-module-2` - runs only module-2 tests, in watch mode.
* ...
