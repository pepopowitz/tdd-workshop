// This function calls an API, using Axios.
// Mocks of API calls are very helpful when doing TDD. An API endpoint
//  is by nature something that relies on a lot of context, which 
//  makes it hard to write an isolated unit test without a lot of setup.

import axios from 'axios';
import querystring from 'querystring';
import serialize from 'form-serialize';

export default async function callApi(form) {
  const serialized = serialize(form);
  const url = `/api/trails?${serialized}`;

  // Here's the actual call to the API, via axios.
  const response = await axios.get(url);

  return response.data;
}