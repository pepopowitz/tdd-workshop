# tdd-workshop
This project contains materials for my TDD workshop, "Building Quality JavaScript With Test-Driven Development."

The materials are divided into 6 modules. Start by reading the [Module 0: Setup](./module-0/README.md) instructions. 

If you are unable to complete [Module 0: Setup](./module-0/README.md), please raise your hand (if in-person), or create an issue in this repository (if not in-person). 

## How this workshop works

### Module Life Cycle

Each of the main modules (1-5) will follow the same life cycle:

1. The instructor will introduce concepts and tools you'll be using for the module. 
2. You'll work through the module on your own, or with others around you. 
3. We'll recap our findings as a group. 

### Calls To Action

Within each module, a pointer finger symbol (👉) indicates instructions which require you to take specific action.

### Stuck?

If you have trouble running any of the commands in the modules, see the [Troubleshooting](#troubleshooting) section of this guide.

The code for each module contains a __solutions folder. If you get stuck writing code for any modules, you can look there for inspiration.

## Modules

### [Module 0: Setup](./module-0/README.md)

This module will get you set up for the workshop. [Start here!](./module-0/README.md)

### [Module 1: Jest](./module-1/README.md)

An introduction to Jest's interactive watch mode. This module will get you comfortable with running tests.

### [Module 2: Intro To Test-Driven Development](./module-2/README.md)

An instructor-led demonstration of TDD. You'll experience the red-green-refactor feedback loop.

### [Module 3: Code Katas](./module-3/README.md)

A small problem that will help get you in the habit of writing tests first.

### [Module 4: Solving Problems Together - Conway's Game Of Life](./module-4/README.md)

A more complicated problem to give you more TDD experience. We'll work through it in pairs.

### Module 5: Real-life TDD

Module 5 will give you experience with applying TDD to real-life problems.

#### [Module 5a: Mocking Dependencies](./module-5ab/README.md#module-5a-mocking-dependencies)

Real-life problems aren't always easy to test. This submodule will teach you how to isolate things you can't control.

#### [Module 5b: Writing Business Logic With TDD](./module-5ab/README.md#module-5b-business-logic)

One great place to introduce TDD into your app is business logic. Business logic is generally less dependent on UI, and can be easier to test in isolation. This submodule gives you practice writing business logic with TDD.

#### [Module 5c: Fixing Bugs With TDD](./module-5c/README.md#module-5c-fixing-bugs)

Another great place to introduce TDD into a project is by fixing bugs. This submodule will show you how to fix bugs with TDD, giving you confidence to introduce it into your projects.

## Troubleshooting

If a command isn't working, use the following checklist to try to identify the problem.

* Did you install Node, NPM, and git? If not, [start here](/module-0/README.md).
* Are there any error messages in the command window that identify the problem? Take a closer look - sometimes the error messages are there, but surrounded by noise.
* If you're having trouble with a module that uses the browser, are there any error messages in the JavaScript console? These might help you identify the problem.

If you still can't figure out why things aren't working, raise your hand, or create an issue against this repository.

## Notes

Notes about how this repository was created are collected [here](./META.md).
