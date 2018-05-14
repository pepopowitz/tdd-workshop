const map = {
  January: 'Tamer of',
  February: 'Wielder of',
  March: 'Breath of',
  April: 'Whisperer of',
  May: 'Face of',
  June: 'Conjurer of',
  July: 'Harvester of',
  August: 'Heart of',
  September: 'Healer of',
  October: 'Seeker of',
  November: 'Avenger of',
  December: 'Harbinger of',
};

export default function(birthMonth) {
  return map[birthMonth];
}
