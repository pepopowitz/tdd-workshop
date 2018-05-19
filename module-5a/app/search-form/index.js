// Look at me...1st

// This function does a bunch of DOM interaction, and I'm not sure how to test it.
//  I've isolated the DOM interactions into this file, and moved all of the
//   things that I can test into other testable functions (e.g. handleSubmit).
// This is the "entry point" into our search form.

import handleSubmit from './handle-submit';

import './index.css';

export default function() {
  const form = document.getElementById('searchForm');

  form.addEventListener('submit', handleSubmit, true);
}
