const renderTime = (expr) => {
  let array = expr.split(/\D/);
  let letters = ['d', 'h', 'min', 's'];
  let string = '';
  for (let i = 0; i < array.length; i++) {
    if (array[i].toString() !== '00') {
      string += Number(array[i]).toString() + letters[i] + ' ';
    }
  }
  return string;
};
const transpIcon = (journey) => {
  let icon;
  if (journey === null) {
    icon = '👣';
  } else if (
    journey.category === null ||
    transpMap[journey.category] === undefined
  ) {
    icon = '🚀';
  } else {
    icon = transpMap[journey.category];
  }
  return icon;
};

const transpMap = {
  SNCF: '🚆',
  TER: '🚆',
  ICE: '🚅',
  IRE: '🚅',
  TGV: '🚅',
  RJX: '🚅',
  EC: '🚆',
  IC: '🚆',
  IR: '🚆',
  PE: '🚆',
  RE: '🚅',
  S: '🚅',
  SN: '🚅',
  R: '🚆',
  ARZ: '🚆',
  EXT: '🚆',
  B: '🚌',
  T: '🚋',
  M: '🚇',
  BOAT: '🛥️',
};

module.exports = {transpMap, renderTime, transpIcon};
