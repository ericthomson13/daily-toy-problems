/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a arring using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
* Extra credit: Make your function support decimals.
* Example:
*   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
*
*/


const numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};

const numbersToPlace = {
  3: 'hundred',
  4: 'thousand',
  6: 'million',
  9: 'billion',
  12: 'trillion',
  15: 'quadrillion',
  18: 'quintillion',
};

const numberToEnglish = (num) => {
  // if hardcoded into words object
  if (num <= 20) return numbersToWords[num];

  // turn to arring so can remove values as go and not modify input num
  let numArr = num.toString().split('');
  // console.log(numArr)
  let result = '';

  // helper function for places
  const places = (arr) => {
    switch(arr.length) {
      case arr.length >= 18:
        result += numbersToPlace[18];
        break;
      case arr.length >= 15:
        result += numbersToPlace[15];
        break;
      case arr.length >= 12:
        result += numbersToPlace[12];
        break;
      case arr.length >= 9:
        result += numbersToPlace[9];
        break;
      case arr.length >= 6:
        result += numbersToPlace[6];
        break;
      case arr.length >= 4:
        result += numbersToPlace[4];
        break;
      case arr.length >= 3:
        result += numbersToPlace[3];
        break;
      default:
        break;
    }
    // add space after places
    if (arr.length >= 3) result += ' ';
  };

  // helper function for each set of 3 or less
  const threeHelper = (subArr) => {
    // if has hundreds place
    if (subArr.length === 3) {
      // if hundreds is not 0
      if (subArr[0] !== '0') {
        // add number then hundred behind it
        result += numbersToWords[subArr[0]] + ' hundred ';
      }
      // remove front number
      subArr.shift();
    }
    // if has tens place that is non-zero
    if (subArr.length === 2 && subArr[0] !== '0') {

      result += numbersToWords[subArr[0] + '0'];
      // if not multiple of 10 sorts ones place
      if (subArr[1] !== '0') {
        result += ('-' + numbersToWords[subArr[1]]);
      }
    // if tens place is 0
    } else if (subArr[1] !== '0') {
      result += numbersToWords[subArr[1]];
    }
    if (subArr.length === 1 && subArr[0] !== '0') {
      result += numbersToWords[subArr[0]];
    }

  };

  // start off arring to handle numbers that start with tens or ones
  if (numArr.length % 3 === 2) {
    threeHelper([numArr[0], numArr[1]]);
    if (numArr.length > 2) places(numArr);
    numArr.splice(0, 2);
  } else if (numArr.length % 3 === 1) {
    threeHelper([numArr[0]]);
    places(numArr);
    numArr.shift();
  }

  // loop through until arring done
  while (numArr.length > 0) {
    // uses first three values
    threeHelper([numArr[0], numArr[1], numArr[2]]);
    // adds places
    places(numArr);
    numArr.splice(0, 3);
  };

  return result.trimEnd();
};

export default numberToEnglish;
