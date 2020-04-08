
export const notArray = [
  {},
  'string',
  6,
  true,
  false,
  null,
  undefined,
];

export const notNumbers = [
  {},
  'string',
  [],
  true,
  false,
  null,
  undefined,
];

export const notString =[
  [],
  {},
  15,
  false,
  true,
  new Set,
  null,
  undefined,
];

export const notObject = [
  'string',
  // have to deal with edgecase of array typeof === 'object'
  [],
  true,
  false,
  10,
  null,
  undefined,
];
