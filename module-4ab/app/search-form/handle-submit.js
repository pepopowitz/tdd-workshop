// This function is an "orchestrator". It doesn't really do anything, except call 
//  other functions in the appropriate sequence.
// Orchestrators can be useful to build out via TDD when you aren't sure about 
//  all of the details you'll need to implement. In this case, I know that I want to...
//  1. Call the api go get some results,
//  2. Render those results
//  But I haven't figured out a whole lot about how those things will happen.
// By writing an orchestrator, I've now isolated those complicated things into functions
//  that I can TDD separately. I call this approach "procrastination" - I know I'm going
//  to need to do these complicated things, but I don't want to deal with them quite yet.

import callApi from './call-api';
import renderSuccessfulOutput from './render-successful-output';
import renderErroneousOutput from './render-erroneous-output';

export default async function handleSubmit(e) {
  e.preventDefault();

  try {
    const apiResult = await callApi(e.target);

    renderSuccessfulOutput(apiResult);
  } catch (error) {
    renderErroneousOutput(error);
  }
}

function handleSuccess(results) {
  renderOutput(mapResultsToUI(results));
}

function handleError(error) {
  renderOutput(mapErrorToUI(error));
}
