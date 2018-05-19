import htmlLooksLike from 'html-looks-like';
export default function toLookLike(actual, expected) {
  try {
    htmlLooksLike(actual, expected);
    return {
      message: 'expected html to look like',
      pass: true,
    };
  } catch (ex) {
    return {
      message: () => ex.message,
      pass: false,
    };
  }
}