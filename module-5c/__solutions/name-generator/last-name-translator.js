const map = {
  a: 'Hooves',
  b: 'Bubbles',
  c: 'Dream',
  d: 'Jewels',
  e: 'Twirly-Tail',
  f: 'Starshine',
  g: 'Toes',
  h: 'Briar',
  i: 'Socks',
  j: 'Glimmer',
  k: 'Kisses',
  l: 'Sunrise',
  m: 'Wings',
  n: 'Starfire',
  o: 'Sunset',
  p: 'Comet',
  q: 'Heart',
  r: 'Dandelions',
  s: 'Moonbeam',
  t: 'Darkness',
  u: 'Thunder',
  v: 'Starlight',
  w: 'Brambles',
  x: 'Twinkle',
  y: 'Fairy',
  z: 'Miracle',
};

export default function(lastName) {
  if (lastName === undefined) {
    return undefined;
  }
  return map[lastName.toLowerCase()[0]];
}
