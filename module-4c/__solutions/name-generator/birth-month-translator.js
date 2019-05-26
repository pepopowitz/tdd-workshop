const map = {
  jan: 'Tamer of',
  feb: 'Wielder of',
  mar: 'Breath of',
  apr: 'Whisperer of',
  may: 'Face of',
  jun: 'Conjurer of',
  jul: 'Harvester of',
  aug: 'Heart of',
  sep: 'Healer of',
  oct: 'Seeker of',
  nov: 'Avenger of',
  dec: 'Harbinger of',
};

export default function(birthMonth) {
  if (birthMonth === undefined) {
    return undefined;
  }
  return map[birthMonth.toLowerCase().substring(0,3)];
}
