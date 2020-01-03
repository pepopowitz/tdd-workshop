# Module 2: Intro To Test-Driven Development

This module will show you what TDD looks like in practice. The instructor will lead the group through a demonstration of TDD. Follow along!

## Rules

### How to play

👉 Fire up the tests by opening a new command window at the root of this project, and running `npm run test-module-2`.

👉 Write tests & code to implement [the specifications](#specifications), one at a time.

**REMEMBER!** Make sure you write a failing test before you implement each specification!

### Specifications

#### 1. Write a method FizzBuzz

#### 2. that takes an integer between 1 and 100 as a parameter

#### 3. and returns a string containing all integers from 1 to the value passed in

i.e. if 15 is passed in, it returns “1 2 3 4 5 6 7 8 9 10 11 12 13 14 15”

#### 4. except for multiples of three, where the number is replaced with the word “Fizz”

i.e. “1 2 Fizz 4 5 Fizz 7 8 Fizz 10 11 Fizz 13 14 Fizz”

#### 5. and for multiples of five, where the number is replaced with the word “Buzz”

i.e. “1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 ??”

#### 6. and for numbers that are multiples of both 3 and 5, where the number is replaced with the word “FizzBuzz”.

i.e. “1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz”

### Helpful information

The [`lodash`](https://lodash.com/docs) library has been installed in this project. You might find the functions [`isNumber`](https://lodash.com/docs#isNumber) and [`range`](https://lodash.com/docs#range) useful when you're implementing the specs. To import them into a file, include this line at the top:

```javascript
import { isNumber, range } from 'lodash';
```
