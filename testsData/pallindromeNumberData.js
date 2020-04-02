// Arrays of tuples for testing pallindromeNumber
export const notNumbers = [
  [{}, false], [[], false], ['string', false], ['2', false], [true, false]
];
export const endsZero = [
  [10, false], [20, false], [30, false], [40, false],
  [50, false], [60, false], [70, false], [80, false], [90, false],
  [100, false], [1000, false], [10000, false], [100000, false],
];
export const singleDigit = [
  [0, true], [1, true], [2, true], [3, true], [4, true],
  [5, true], [6, true], [7, true], [8, true], [9, true],
];
export const pallindromes = [
  [121, true], [212, true], [545, true], [606, true], [757, true], [737, true], 
  [747, true], [808, true], [111100001111, true], [999988889999, true],
];
export const notPallindromes = [
  [321, false], [549, false], [908363643, false], [74876567, false], [1231, false],
];
