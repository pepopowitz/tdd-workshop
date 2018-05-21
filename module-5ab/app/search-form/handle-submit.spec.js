// TODO - document mocking
import handleSubmit from './handle-submit';
import callApi from './call-api';
import renderSuccessfulOutput from './render-successful-output';
import renderErroneousOutput from './render-erroneous-output';

jest.mock('./call-api');
jest.mock('./render-successful-output');
jest.mock('./render-erroneous-output');

describe('module-5ab/app/search-form/handle-submit', () => {
  beforeEach(() => {
    callApi.mockClear();
    renderSuccessfulOutput.mockReset();
    renderErroneousOutput.mockReset();
  });

  it('prevents default on event', async () => {
    const e = {
      preventDefault: jest.fn(),
    };

    await handleSubmit(e);

    expect(e.preventDefault).toHaveBeenCalledTimes(1);
  });

  it('calls the api', async () => {
    const e = {
      preventDefault: jest.fn(),
      target: 'some form'
    };

    await handleSubmit(e);

    expect(callApi).toHaveBeenCalledTimes(1);
    expect(callApi).toHaveBeenLastCalledWith(e.target);
  });
  
  it('handles successful output', async () => {
    const apiResults = { some: 'result' };
    callApi.mockResolvedValue(apiResults);
  
    const e = {
      preventDefault: jest.fn(),
      target: 'some form'
    };

    await handleSubmit(e);

    expect(renderSuccessfulOutput).toHaveBeenCalledTimes(1);
    expect(renderSuccessfulOutput).toHaveBeenLastCalledWith(apiResults);
  });

  it('handles erroneous output', async () => {
    const error = { some: 'error' };
    callApi.mockRejectedValue(error);
  
    const e = {
      preventDefault: jest.fn(),
      target: 'some form'
    };

    await handleSubmit(e);

    expect(renderErroneousOutput).toHaveBeenCalledTimes(1);
    expect(renderErroneousOutput).toHaveBeenLastCalledWith(error);
  });
});

// function aFakeForm() {
//   const form = document.createElement('FORM');
//   form.name = 'searchForm';

//   const input = document.createElement('INPUT');
//   input.type = 'TEXT';
//   input.name = 'hills';
//   input.value = 'Easy';

//   form.appendChild(input);

//   return form;
// }