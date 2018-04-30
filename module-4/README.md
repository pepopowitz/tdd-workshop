# Module: Code Kata

## Background

A *code kata* is a programming exercise in which a developer attempts to solve a pre-defined problem, to hone their skills.

Code katas are generally not a real-world problem. They have well-defined specifications and rules. 

Code katas are more about developing a practice, and less about solving the underlying problems. Katas are intended to help you build a testing habit. 

The more you practice TDD, the sooner it becomes your default approach to a problem. Katas are a means to help you get there.

## Instructions

Work together in pairs to execute a code kata.

Pair up with the person sitting next to you.

Use only one laptop between the two of you. Work together to choose the laptop. One of you might be using a text editor you've never used before, so decide which of you is more comfortable with the other's editor.

Implement the [specifications](#specifications) one at a time.

Alternate writing tests and making tests pass. For example:

Person 1: Write a failing test
Person 2: Make the test pass
Person 1&2: Refactor together
Person 2: Write a failing test
Person 1: Make the test pass
Person 1&2: Refactor together
Repeat this process until all specifications are implemented.

## Rules
* No code without tests
* You may collaborate to define the test cases
* When you are typing, you decide the code that is written
* You may ask for the other’s opinion
* But the other may not force you to write the code a certain way
* Keep all methods below 5 lines
* Do one task at a time; try not to read ahead

kata - string calculator?

  Specs written out
  Harness in place
  Something more interesting/real-life?


The String Calculator kata
http://osherove.com/tdd-kata-1

You do not need to validate input. Assume all input into the method is valid.

1. Create a simple String calculator with a method int Add(string numbers)
	The method can take 0, 1 or 2 numbers, and will return their sum (for an empty string it will return 0) for example “” or “1” or “1,2”
	Start with the simplest test case of an empty string and move to 1 and two numbers
	Remember to solve things as simply as possible so that you force yourself to write tests you did not think about
	Remember to refactor after each passing test
2. Allow the Add method to handle an unknown amount of numbers
3. Allow the Add method to handle new lines between numbers (instead of commas).
	the following input is ok:  “1\n2,3”  (will equal 6)
	the following input is NOT ok:  “1,\n” (not need to prove it - just clarifying)
4. Support different delimiters
	to change a delimiter, the beginning of the string will contain a separate line that looks like this:   “//[delimiter]\n[numbers…]” for example “//;\n1;2” should return three where the default delimiter is ‘;’ .
	the first line is optional. all existing scenarios should still be supported
5. Calling Add with a negative number will throw an exception “negatives not allowed” - and the negative that was passed.if there are multiple negatives, show all of them in the exception message
