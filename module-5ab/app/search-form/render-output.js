// This function does a lot of DOM interaction, and I'm not totally sure how to test it.
//  I've extracted/isolated only the things that I don't know how to test into this function.
//  Now I can mock this function in tests of callers, and make sure I'm
//   passing in the right arguments.

export default function renderOutput(output) {
  const element = document.getElementById('output');

  if (element.hasChildNodes()) {
    element.replaceChild(output, element.childNodes[0]);
  } else {
    element.appendChild(output);
  }
}
