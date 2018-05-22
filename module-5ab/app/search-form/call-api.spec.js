// Import the dependency we will mock
import axios from 'axios';

import callApi from './call-api';

// Mock the axios dependency
jest.mock('axios');

describe('module-5ab/app/search-form/call-api', () => {
  // Reset the axios mock before each test, so that the current test
  //  isn't affected by previous tests. 
  beforeEach(() => {
    axios.get.mockReset();
  });

  it('calls the api', async () => {
    // Provide a fake implementation of axios.get. This one returns a promise 
    //  of a fake API response.
    axios.get.mockResolvedValue(aFakeResponse());

    const form = aFakeForm();

    await callApi(form);

    // Assert that axios.get was called, with specific parameters.
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenLastCalledWith('/api/trails?hills=Easy');
  });

  it('returns the data property', async () => {
    const apiResponse = aFakeResponse();
    axios.get.mockResolvedValue(apiResponse);

    const form = aFakeForm();

    const result = await callApi(form);

    expect(result).toEqual(apiResponse.data);
  });
});

function aFakeForm() {
  const form = document.createElement('FORM');
  form.name = 'aForm';

  const input = document.createElement('INPUT');
  input.type = 'TEXT';
  input.name = 'hills';
  input.value = 'Easy';

  form.appendChild(input);

  return form;
}

function aFakeResponse(){
  return {
    data: [
      {
        name: 'first item',
        hills: 'Easy'
      }
    ]
  }
}