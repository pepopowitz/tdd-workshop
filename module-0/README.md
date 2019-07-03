# Module 0: Setup

This module will help you set up your local environment!

## Requirements

You're going to need three tools installed: [git](#1-git), [NodeJS](#2-nodejs), and [NPM](#3-npm).

If you know you're all set with recent versions of these three things, skip ahead to [Clone This Repository](#clone-this-repository).

### 1. git

There are 2 reasons you'll need git -

1. To clone this repository.
2. Jest, the test framework we're going to use, depends on git to identify changes you've recently made.

If you already have a git client installed, you're covered for #1.

For #2, you'll need to make sure you can access git from a terminal/command line.

👉 To verify this, open a terminal window. Run the following command:

`git --version`

If you have git installed, and accessible to your terminal, you'll see a version number listed. You can move on to [2. NodeJS](#2-nodejs)!

If you don't see a version listed, or an error that says something to the effect of "I don't know what git is", you need to either install git, or add it to your path/environment variables.

#### I need to install git

👉 If you think you need to install git, [go here](https://git-scm.com/downloads). If the installer asks if you want to add git to your path/environment variables, say yes!

#### I already installed git but `git -v` doesn't work

This probably means git wasn't added to your path/environment variables, so your terminal can't find it. You have a couple options.

👉 1. Run the "git bash" terminal for the workshop instead of the one you usually use.

👉 2. Add git to your path/environment variables.

Option 2 is a little more complicated. If you don't know how to do it already, you'll likely need to search the internet to find out how.

### 2. NodeJS

👉 From your terminal/command line, run the following command:

`node -v`

You should see a version number, and the version number should be at least 8.9.0.

#### I see a version number, and it is at least 8.9.0!

👉 Sweet! You can move on to [verifying that you have NPM installed](#3-npm).

#### I see a version number, but it is less than 8.9.0.

There's a chance that things could be fine, but you might want to upgrade your version of Node just to be safe.

👉 If you're using a Node version manager, you probably know how to upgrade your version of Node. It's probably a matter of installing a newer version via a command like `nvm install v8.9.4`.

👉 If you aren't using a Node version manager, you'll want to grab the LTS installer from [NodeJS.org](https://nodejs.org/en/). If it asks you to also install NPM, say yes!

#### I don't see a version number.

👉 You need to install NodeJS.

I recommend using a Node version manager - this will allow you to install multiple versions of Node locally, and switch between them. This is especially helpful if you're attending multiple workshops, as different sessions might require different versions. If you're on Mac/Linux, I recommend [NVM](https://github.com/creationix/nvm). If you're on Windows, I recommend [nvm-windows](https://github.com/coreybutler/nvm-windows).

If you'd prefer to just install one version of Node, that's fine too. You can grab the LTS installer from [NodeJS.org](https://nodejs.org/en/).

### 3. NPM

👉 Most likely, NPM was installed when you installed NodeJS. You can verify this by checking for a version in your terminal/command line.

`npm -v`

You should see a version number, and the version number should be at least 5.5.1.

#### I see a version number, and the version number is at least 5.5.1!

👉 Congratulations! You're ready to [clone this repository](#clone-this-repository)!

#### I see a version number, but it is less than 5.5.1.

👉 You need to upgrade NVM. You can read about it [here](https://docs.npmjs.com/getting-started/installing-node#install-npm--manage-npm-versions).

#### I don't see a version number.

👉 You need to install NPM. You can read about it [here](https://docs.npmjs.com/getting-started/installing-node#install-npm--manage-npm-versions).

## Clone This Repository

👉 Clone this repository using your git client!

The repository URL is https://github.com/pepopowitz/tdd-workshop.git. If you've never done this before, you want to go into your terminal and type...

`git clone https://github.com/pepopowitz/tdd-workshop.git`

This will clone the repository into your current working directory.

## Install Dependencies

👉 Once the repository is cloned, enter that directory in your terminal, and run

`npm install`

## Verify Setup

I've included a simple test to make sure everything seems to be installed correctly.

👉 From your terminal, run

`npm run verify`.

You should see the below output. If you do, you're ready to go! If you don't, ask your neighbor or the instructor for help, or create an issue in this repository describing the problem.

```
Dependencies are set up!
 PASS   module-0  module-0/verify.spec.js
  Verifying your setup
    ✓ should run a test (3ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.859s, estimated 1s
Ran all test suites.
```
