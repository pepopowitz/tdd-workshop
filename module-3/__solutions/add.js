// SOLUTION! (whole file)

export default function add(numbers) {
  if (numbers === '') {
    return 0;
  }

  let delimiterPattern = '[,\n]';

  if (numbers.startsWith('//')) {
    const delimiter = numbers[2];
    delimiterPattern = '[,\n' + delimiter + ']';
    numbers = numbers.slice(4);
  }

  const splits = numbers.split(new RegExp(delimiterPattern));

  const parsed = splits.map(number => parseInt(number, 10));

  const outOfRange = parsed.filter(value => value < 0);

  if (outOfRange.length > 0) {
    throw new Error(`Negatives not allowed: ${outOfRange.join(', ')}`);
  }

  return parsed.reduce((acc, curr) => acc + curr);
}
