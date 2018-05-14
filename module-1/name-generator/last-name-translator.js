const map = {
  A: 'Hooves',
  B: 'Bubbles',
  C: 'Dream',
  D: 'Jewels',
  E: 'Twirly-Tail',
  F: 'Starshine',
  G: 'Toes',
  H: 'Briar',
  I: 'Socks',
  J: 'Glimmer',
  K: 'Kisses',
  L: 'Sunrise',
  M: 'Wings',
  N: 'Starfire',
  O: 'Sunset',
  P: 'Comet',
  Q: 'Heart',
  R: 'Dandelions',
  S: 'Moonbeam',
  T: 'Darkness',
  U: 'Thunder',
  V: 'Starlight',
  W: 'Brambles',
  X: 'Twinkle',
  Y: 'Fairy',
  Z: 'Miracle',
};

export default function(lastName) {
  return map[lastName[0]];
}
