# Mocking

## What Is Mocking?

Mocking dependencies means replacing actual dependencies with "fake" ones, to prevent the original from being called. We can control what is returned by a mocked dependency, and make assertions that specific calls were made against it.

## When Do We Need To Mock?

There are several reasons you might want to mock dependencies:

1. The actual dependency has side-effects that you don't want to execute during tests. An API endpoint that deletes a user isn't something you'd want to call while TDD'ing an app. You'd want to mock that endpoint, and call the "fake" one instead.

2. The actual dependency is not deterministic. A deterministic function is one that returns the same results given the same input, every single time. Not all functions are deterministic, though. Sometimes they depend on a lot of context (e.g. calls against a database, looking for specific records). Sometimes they are intrinsically non-deterministic (e.g. a function that gets the current time). It is much easier to write tests against these dependencies when they are mocked - we can easily control the values they are returning, and verify our system is handling all the possible values properly.

3. The actual implementation is difficult to test, or expensive to test. An example in our sample app would be UI interactions. We are using vanilla JS to build our UI, and there isn't a great way to test DOM manipulation without spending a lot of effort getting it set up, and without our tests becoming pretty slow. In these cases, it can be helpful to isolate the things that are difficult to test, and TDD all of the things that are easier to test, separately. 

4. There are times when you might want to mock a dependency just because you don't know the details of it yet. This can happen when you are integrating with another team or developer, but it can also happen when TDD'ing your own code - especially when you have a large problem that you need to break into smaller problems. In these cases, it can be helpful to mock the "difficult" stuff, and write simple functions with TDD that orchestrate those dependencies. Then, you can apply TDD to the "difficult" functions in isolation. I call these functions "orchestrators", and I call this strategy "procrastination."

## Mocking Examples

To familiarize you with mocking in TDD, let's look at some examples in the code.

### `module-5ab/app/search-form/index.js`

&#128073; Open the `module-5ab/app/search-form/index.js` file. 

There are no tests against this function. This function is the entry-point into our 'search-form' app. It connects our "search-form" code to the DOM element. 

This is code that we aren't interested in testing with TDD for this example. We could definitely test this code with UI tests. It would also be much easier to test if we were using a UI framework, like React or Angular. As a vanilla JS app, these DOM interactions are things we are just going to skip, due to the cost.

Specifically, this function connects the search form in the DOM to a `handleSubmit` function. Let's look there next!

### `module-5ab/app/search-form/handle-submit.js`

&#128073; Open the `module-5ab/app/search-form/handle-submit.js` file. 

The `handleSubmit` function is an "orchestrator." It doesn't really "do" much, except call other functions in the appropriate sequence. 

When I built this function, I knew I needed to do two things - call the API to get results, and then render those results. I wasn't sure what either of those things looked like, but I knew I needed them to happen in sequence. Using the strategy of "procrastination," I built this orchestrator using TDD. Let's look at the tests together.

### `module-5ab/app/search-form/handle-submit.spec.js`

&#128073; Open the `module-5ab/app/search-form/handle-submit.spec.js` file. 

The tests for `handleSubmit` utilize mocking to "fake" the difficult things that I wanted to procrastinate - `callApi`, `renderSuccessfulOutput`, and `renderErroneousOutput`. 

These dependencies are mocked using Jest. There are several lines in these tests worth mentioning.

#### Lines 4-6: Import The Dependencies

```
import callApi from './call-api';
import renderSuccessfulOutput from './render-successful-output';
import renderErroneousOutput from './render-erroneous-output';
```

Lines 4-6 import the dependencies we want to mock. 

The dependencies are imported exactly as they would be imported into the `handleSubmit` function that we are testing.

#### Lines 9-11: Mock The Dependencies

```
jest.mock('./call-api');
jest.mock('./render-successful-output');
jest.mock('./render-erroneous-output');
```

Lines 9-11 mock out our dependencies, using `jest.mock`. In each of these cases, we just want to auto-mock the dependencies. This gives us a fully mocked version of our dependency, with no fake implementation. We will provide the fake implementation later in these tests. 

You can read all about more styles of mocking with Jest [in their docs](https://facebook.github.io/jest/docs/en/es6-class-mocks.html#the-4-ways-to-create-an-es6-class-mock).

#### Lines 17-19: Reset The Mocks

```
beforeEach(() => {
  callApi.mockReset();
  renderSuccessfulOutput.mockReset();
  renderErroneousOutput.mockReset();
});
```

Using the `beforeEach` hook provided by Jest, we reset all of our mocks before each test. Without doing this, calls to each mock would be preserved across all tests - so when the third test ran, it would think our mock had been called three times during its execution. By calling `.mockReset()` on each of our mocks, all interactions are discarded before each test runs.

Note also that we are calling `.mockReset()` against the name of the dependency as we imported it, in lines 4-6. This is because `jest.mock()` turned the dependency into a fake one - and added a bunch of useful functions to the dependency, for the purposes of testing. You can read about all of the functions available to a 'mock function' [in the Jest docs](https://facebook.github.io/jest/docs/en/mock-functions.html).

#### Lines 52-53 and 70-71: Providing A Fake Implementation

```
const apiResults = { some: 'result' };
callApi.mockResolvedValue(apiResults);
```

For some of our tests, we need to specify that a mocked dependency returns a specific value. This allows us to verify proper orchestration of the dependencies.

`.mockResolvedValue()` is one of the many functions that `jest.mock()` added to our dependency, allowing us to easily provide fake implementations for tests. You can read more about these helpers [in the Jest docs](https://facebook.github.io/jest/docs/en/mock-function-api.html).

Remember our call to `.mockReset()`? That clears this mocked implementation at the beginning of the next test - cleaning it up for you. Without that call, this fake implementation would probably get in the way of your other tests.

#### Lines 44-45, 63-64, and 81-82: Asserting Against A Mock

```
expect(callApi).toHaveBeenCalledTimes(1);
expect(callApi).toHaveBeenLastCalledWith(e.target);
```

The `expect` function from Jest gives us access to a lot of useful matchers, including several for asserting how our mocks were called. 

In these tests, we assert that a mocked dependency is called a specific number of times, and that a specific argument was passed the last time it was called. This allows us to verify that we are orchestrating correctly.

You can read more about Jest matchers [in their docs](https://facebook.github.io/jest/docs/en/expect.html).



#### Line 26: Utilizing jest.fn For A Simple "Spy" Function

```
preventDefault: jest.fn(),
```

Sometimes our dependencies take a function as an input, instead of importing it from a separate file. When we need to provide fake implementations of these, or assert executions of them, we can use `jest.fn()` to create a simple "spy" function. 

Remember how `jest.mock()` added a whole bunch of useful functions to our mocked dependencies? It did so by turning the mocked dependency into a "spy", which is the same type of object returned by `jest.fn()`. All of the helpful methods we had on our imported dependencies are also available on `e.preventDefault`. 

In this case, we only want to assert that this spy was called. We do so on line 32: 

```
expect(e.preventDefault).toHaveBeenCalledTimes(1);
```

### `module-5ab/app/search-form/call-api.js`

&#128073; Open the `module-5ab/app/search-form/call-api.js` file. 

The callApi function is one of the functions I mocked in my orchestration tests. 

This function calls an API, using the `axios` library. APIs are difficult to include in your tests when using TDD. They make tests either unpredictable or dependent on lots of setup. They also make your tests slower.

To test-drive this method, I mocked out the call to `axios.get`. Let's see how, in the tests.

### `module-5ab/app/search-form/call-api.spec.js`

&#128073; Open the `module-5ab/app/search-form/call-api.spec.js` file. 

There isn't much different in `call-api.spec.js` than we saw in `handle-submit.spec.js`. We take the same five actions with our mock, in this case a mock of the `axios` library: 

1. Import the dependency
2. Mock the dependency
3. Reset the dependency before each test
4. Provide a fake implementation
5. Assert against the fake dependency

### `module-5ab/app/search-form/render-successful-output.js`

&#128073; Open the `module-5ab/app/search-form/render-successful-output.js` file. 

The renderSuccessfulOutput function is another of the functions I mocked in my orchestration tests. 

This function would have some interaction with the DOM, but I isolated that DOM manipulation into another function named `renderOutput`. This allows us to mock `renderOutput`, and assert that we are passing our elements into it correctly, without actually testing the DOM manipulation.

### `module-5ab/app/search-form/render-successful-output.spec.js`

&#128073; Open the `module-5ab/app/search-form/render-successful-output.spec.js` file. 

Most of these tests should look familiar. In this case, we don't actually need to provide a fake implementation for the tests - so we have four of our usual actions against a mock, in this case of `renderOutput`:

1. Import the dependency
2. Mock the dependency
3. Reset the dependency before each test
4. Assert against the fake dependency

#### html-looks-like

`html-looks-like` is a library we're pulling in, to compare HTML. In this file, we're importing a `looksLike` dependency on line 7, then applying it as an extension to Jest in lines 10-12. 

In our `it('renders a list if there are results')` test, we then use our new `toLookLike` matcher, to compare expected markup to actual markup: 

```
expect(rendered.outerHTML).toLookLike(...expected markup...)
```

`html-looks-like` isn't required for TDD, but it makes it a little easier to write & read tests that compare markup.
