const map = {
  a: 'Emerald',
  b: 'Sunny',
  c: 'Snowy',
  d: 'Whispering',
  e: 'Elegant',
  f: 'Silly',
  g: 'Fluffy',
  h: 'Ruby',
  i: 'Tiny',
  j: 'Rising',
  k: 'Perky',
  l: 'Dancing',
  m: 'Whirling',
  n: 'Shiny',
  o: 'Enchanted',
  p: 'Merry',
  q: 'Shimmering',
  r: 'Cloudy',
  s: 'Sassy',
  t: 'Soaring',
  u: 'Fuzzy',
  v: 'Fancy',
  w: 'Bedazzled',
  x: 'Prancing',
  y: 'Piercing',
  z: 'Dashing'
}
  
  
export default function(name){
  if (name === undefined) {
    return undefined;
  }
  return map[name.toLowerCase()[0]];
}

