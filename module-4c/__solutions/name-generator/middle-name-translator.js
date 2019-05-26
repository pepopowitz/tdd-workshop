const map = {
  a: 'Royal',
  b: 'Sugar',
  c: 'Magic',
  d: 'Sparkle',
  e: 'Spotted',
  f: 'Happy',
  g: 'Golden',
  h: 'Princess',
  i: 'Serene',
  j: 'Crystal',
  k: 'Silver',
  l: 'Lovely',
  m: 'Prince',
  n: 'Peaceful',
  o: 'Rainbow',
  p: 'Regal',
  q: 'Starry',
  r: 'Flowing',
  s: 'Cuddly',
  t: 'Forever',
  u: 'Glitter',
  v: 'Cascading',
  w: 'Tender',
  x: 'Sweet',
  y: 'Feisty',
  z: 'Spirit',
};

export default function(middleName) {
  if (middleName === undefined) {
    return undefined;
  }
  return map[middleName.toLowerCase()[0]];
}
