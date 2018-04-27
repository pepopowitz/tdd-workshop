something dead simple, with 90% of tests written.
  allow them to write one or two tests, and play around with the existing tests.

Run the test suite
    npm run test-watch
    Run all tests
      w a
    Run filtered tests
      w p file name
      w t test name
    Run only the tests affected by recent changes
      w o
        Noticed: no tests are executing
        This is because we don't have any local changes!
  Add a test
    Open ./????/???.spec.js
    Add a test for some condition
    Save file
      View terminal - did it pass?
        yes: move on to next test
        no: figure out why it's not passing
      Debugging tips:
        console.log
        VS Code debugger