import handleSubmit from './handle-submit';

// These are the dependencies we will mock.
import callApi from './call-api';
import renderSuccessfulOutput from './render-successful-output';
import renderErroneousOutput from './render-erroneous-output';

// jest.mock replaces the actual implementation with a mock function.
jest.mock('./call-api');
jest.mock('./render-successful-output');
jest.mock('./render-erroneous-output');

describe('module-4ab/app/search-form/handle-submit', () => {
  // Before each test, we want to reset each mock, so that the current test
  //  isn't affected by previous tests.
  beforeEach(() => {
    callApi.mockReset();
    renderSuccessfulOutput.mockReset();
    renderErroneousOutput.mockReset();
  });

  it('prevents default on event', async () => {
    // In this case, we call jest.fn(), because this dependency is passed in
    //  as an argument. jest.fn() gives us a "spy" function.
    const e = {
      preventDefault: jest.fn(),
    };

    await handleSubmit(e);

    // We can assert many things against our "spy" function.
    expect(e.preventDefault).toHaveBeenCalledTimes(1);
  });

  it('calls the api', async () => {
    const e = {
      preventDefault: jest.fn(),
      target: 'some form',
    };

    await handleSubmit(e);

    // We can also assert many things against a mocked import.
    expect(callApi).toHaveBeenCalledTimes(1);
    expect(callApi).toHaveBeenLastCalledWith(e.target);
  });

  it('handles successful output', async () => {
    // If we want to provide a fake implementation of a mocked import, there are many
    //  useful functions we can call. In this case, .mockResolvedValue makes `callApi`
    //  return a promise that resolves to a specific value.
    const apiResults = { some: 'result' };
    callApi.mockResolvedValue(apiResults);

    const e = {
      preventDefault: jest.fn(),
      target: 'some form',
    };

    await handleSubmit(e);

    // We make assertions against another mocked import.
    expect(renderSuccessfulOutput).toHaveBeenCalledTimes(1);
    expect(renderSuccessfulOutput).toHaveBeenLastCalledWith(apiResults);
  });

  it('handles erroneous output', async () => {
    // This time, we want to provide a different implementation of `callApi`.
    //  Here, it will return a promise that resolves to a specific error.
    const error = { some: 'error' };
    callApi.mockRejectedValue(error);

    const e = {
      preventDefault: jest.fn(),
      target: 'some form',
    };

    await handleSubmit(e);

    // We make assertions against another mocked import.
    expect(renderErroneousOutput).toHaveBeenCalledTimes(1);
    expect(renderErroneousOutput).toHaveBeenLastCalledWith(error);
  });
});
