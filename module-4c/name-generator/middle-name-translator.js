const map = {
  A: 'Royal',
  B: 'Sugar',
  C: 'Magic',
  D: 'Sparkle',
  E: 'Spotted',
  F: 'Happy',
  G: 'Golden',
  H: 'Princess',
  I: 'Serene',
  J: 'Crystal',
  K: 'Silver',
  L: 'Lovely',
  M: 'Prince',
  N: 'Peaceful',
  O: 'Rainbow',
  P: 'Regal',
  Q: 'Starry',
  R: 'Flowing',
  S: 'Cuddly',
  T: 'Forever',
  U: 'Glitter',
  V: 'Cascading',
  W: 'Tender',
  X: 'Sweet',
  Y: 'Feisty',
  Z: 'Spirit',
};

export default function(middleName) {
  return map[middleName[0]];
}
