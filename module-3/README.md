# Module 3: Code Katas

This module will help get you in the habit of writing tests first.

## Background

A _code kata_ is a programming exercise in which a developer attempts to solve a pre-defined problem, to hone their skills.

Code katas are generally not real-world problems. They have well-defined specifications and rules.

Code katas are more about developing a practice, and less about solving the underlying problems. Katas are intended to help you build a testing habit. The more you practice TDD on sample problems, the sooner TDD becomes your default approach to real problems.

## Ground Rules

- Don't write new code without writing a test first
- Do one task at a time; try not to read ahead
- You are welcome to pair with others on this exercise!

## Let's Play!

👉 Take a look at the `module-3/add.spec.js` test file. This is where you'll be writing your tests for this exercise.

Currently, there is one test, named `it('exists'...)`. This test simply verifies that the `add` function exists.

Depending on your level of dogma, it is either very important to create a test that verifies the existence of a function before you write it, or very unimportant.

👉 Take a look at the `module-3/add.js` test file. This is where you'll be implementing your string calculator/add function.

Currently, you'll see that the function in `add.js` is returning `undefined`.

👉 Start up the test suite.

From a command line at the root of the workshop project, type `npm run test-module-3`. This will start up the test suite.

At this point, no tests should run, and you should see this message:

`No tests found related to files changed since last commit.`

👉 Start implementing the specifications!

### The String Calculator kata

This kata builds a function that takes numbers in as string input, and returns their sum. It emphasizes refactoring.

The kata is adapted from [http://osherove.com/tdd-kata-1](http://osherove.com/tdd-kata-1).

### Specifications

#### 0. Note: You do not need to validate input. Assume all input into the method is valid.

#### 1. Create a simple function add(string numbers)

This is done for you! There's even a test to verify that the function exists.

#### 2. The function can take 0, 1 or 2 numbers.

Example inputs: “” or “1” or “1,2”

For an empty string the function should return 0.

For strings with 1 or 2 numbers, the function should return the sum of the numbers.

##### Suggestions:

- Start with the simplest test case of an empty string and move to 1 and 2 numbers

- Remember to solve things as simply as possible so that you force yourself to write tests you did not think about

- Remember to refactor after each passing test

#### 3. Allow the add function to handle an unknown amount of numbers, separated by commas

#### 4. Allow the add function to handle new lines between numbers, instead of commas.

The following input is ok:  “1\n2,3”  (will equal 6)

The following input is NOT ok:  “1,\n” (You don't need to write a test for this - just clarifying.)

#### 5. Support different delimiters

To specify a delimiter, the string will begin with two slashes, then the delimiter, then a new line.

For example, the input “//;\n1;2” should return three. "//;\n" specifies that the delimiter is ";", and "1;2" should be added together.

The delimiter specification is optional. All previously existing scenarios should still be supported.

#### 6. Calling add with a negative number should throw an error with the message “Negatives not allowed: X”, where X is the negative value passed.

If there are multiple negatives, show all of them in the error message.

For example, the input "1,-1,-4" should throw the error "Negatives not allowed: -1, -4".
