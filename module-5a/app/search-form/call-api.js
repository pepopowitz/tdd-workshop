// Look at me...3rd

// TODO - document

import axios from 'axios';
import querystring from 'querystring';
import serialize from 'form-serialize';

export default async function callApi(form) {
  const serialized = serialize(form);
  const url = `/api/trails?${serialized}`;

  const response = await axios.get(url);

  return response.data;
}