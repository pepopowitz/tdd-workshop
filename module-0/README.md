# Module 0: Setup

This module will help you set up your local environment!

## Requirements

You're going to need three tools installed: git, NodeJS, and NPM. 

### 1. git

There are 2 reasons you'll need git - 

1. To clone this repository.
2. Jest, the test framework we're going to use, depends on Git to identify changes you've recently made.

If you already have a git client installed, you're covered for #1. 

For #2, you'll need to make sure you can access git from a terminal/command line. 

**ACTION!** To verify this, open a terminal window. Run the following command:

`git -v`

If you have git installed, and accessible to your terminal, you'll see a version number listed. You can move on to [2. NodeJS]()!

If you don't see a version listed, or an error that says something to the effect of "I don't know what git is", you need to either install git, or add it to your path/environment variables.

#### I need to install git

**ACTION!** If you think you need to install git, [go here](https://git-scm.com/downloads). If the installer asks if you want to add git to your path/environment variables, say yes!

#### I already installed git but `git -v` doesn't work

This probably means git wasn't added to your path/environment variables, so your terminal can't find it. You have a couple options.

**ACTION!** 1. Run the "git bash" terminal for the workshop instead of the one you usually use.

**ACTION!** 2. Add git to your path/environment variables.

Option 2 is a little more complicated. If you don't know how to do it already, you'll likely need to search the internet to find out how.

### 2. NodeJS

**ACTION!** From your terminal/command line, run the following command: 

`node -v`

You should see a version number, and the version number should be at least 8.9.0. 

#### I see a version number, and it is at least 8.9.0!

**ACTION!** Sweet! You can move on to [verifying that you have NPM installed]().

#### I see a version number, but it is less than 8.9.0.

There's a chance that things could be fine, but you might want to upgrade your version of Node just to be safe. 

**ACTION!** If you're using a Node version manager, you probably know how to do this.

**ACTION!** If you aren't using a Node version manager, you'll want to grab the LTS installer from [NodeJS.org](https://nodejs.org/en/). If it asks you to also install NPM, say yes!

#### I don't see a version number. 

**ACTION!** You need to install NodeJS.

I recommend using a Node version manager - this will allow you to install multiple versions of Node locally, and switch between them. This is especially helpful if you're attending multiple workshops, as different sessions might require different versions. If you're on Mac/Linux, I recommend [NVM](https://github.com/creationix/nvm). If you're on Windows, I recommend [nvm-windows](https://github.com/coreybutler/nvm-windows).

If you'd prefer to just install one version of Node, that's fine too. You can grab the LTS installer from [NodeJS.org](https://nodejs.org/en/).

### 3. NPM

**ACTION!** Most likely, NPM was installed when you installed NodeJS. You can verify this by checking for a version in your terminal/command line.

`npm -v`

You should see a version number, and the version number should be at least 5.5.1.

#### I see a version number, and the version number is at least 5.5.1!

**ACTION!** Congratulations! You're ready to [clone this repository](#clone-this-repository)!

#### I see a version number, but it is less than 5.5.1. 

**ACTION!** You need to upgrade NVM. You can read about it [here](https://docs.npmjs.com/getting-started/installing-node#install-npm--manage-npm-versions).

#### I don't see a version number.

**ACTION!** You need to install NPM. You can read about it [here](https://docs.npmjs.com/getting-started/installing-node#install-npm--manage-npm-versions).

## Clone This Repository

**ACTION!** Clone this repository using your git client!

The repository URL is https://github.com/pepopowitz/tdd-workshop.git. If you've never done this before, you want to go into your terminal and type...

`git clone https://github.com/pepopowitz/tdd-workshop.git`

This will clone the repository into your current working directory.

## Install Dependencies

**ACTION!** Once the repository is cloned, enter that directory in your terminal, and run 

`npm install`

## Verify Setup

I've included a simple test to make sure everything seems to be installed correctly.

**ACTION!** From your terminal, run 

`npm run verify`.

If you see the message `You're all set!`, then you're ready to go!

If you see the message `Something's not right`, or you get an error, then raise your hand if you are in-person, or create an issue describing the problem.
