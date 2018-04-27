# Module: Interactive Test-Driven Development Demo

## Instructions

The instructor will lead the group through a demonstration of TDD. Follow along!

## Why is this module here, then?

If you don't want to follow along with the group, feel free to build out FizzBuzz on your own, using TDD.

## Rules

### How to play

* Fire up the tests by opening a new command window, and running `npm run test-watch-module-1`
* Write tests & code to implement [the specifications](#specifications), one at a time. 
* Make sure you write a failing test before you implement each specification!

### Specifications

1. Write a method FizzBuzz
2. that takes an integer between 1 and 100 as a parameter
3. and returns a string containing all integers from 1 to the value passed in
  i.e. if 15 is passed in, it returns “1 2 3 4 5 6 7 8 9 10 11 12 13 14 15”
4. except for multiples of three, where the number is replaced with the word “Fizz”
  i.e. “1 2 Fizz 4 5 Fizz 7 8 Fizz 10 11 Fizz 13 14 Fizz”
5. and for multiples of five, where the number is replaced with the word “Buzz”
  i.e. “1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 ??”
6. and for numbers that are multiples of both 3 and 5, where the number is replaced with the word “FizzBuzz”.
  i.e. “1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz”
