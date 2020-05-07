/*

This was seen on an interview


*/

const repeatingChars = (S, K) => {
  // edge cases of S being empty or K being 0
  if (!S.length) return 0;
  if (K === 0) return S.length;
  // count for array of tuples
  const count = [
      [1, S[0]],
  ];

  // iterate through S building tuples
  for (let i = 1; i < S.length; i++) {
      // letter the same as last
      if (count[count.length - 1][1] === S[i]) {
          // add to count of tuple;
          count[count.length - 1][0]++;
      } else {
          // if not the same add new tuple with count and letter
          // was getting correct answer for ex test 2 but false positive using concat() below
          // push() builds the correct array no more false positive
          count.push([ 1, S[i] ]);
      }
  }

  // sum to track to k
  let sum = 0;
  // left index
  let lpointer = 0;
  // right index
  let rpointer = 1;
  // difference between l and r
  let diff = 0;

  // iterate through count
  while (rpointer < count.lenth) {
      // adds number of any size length
      sum += count[rpointer][0].toString().length;
      // adds for the letter if count greater than 1
      sum += count[rpointer][0] > 1 ? 1 : 0;

      // if sum over k busts
      if (sum > k) {
          // move left pointer
          lpointer++;
          // reset right pointer
          rpointer = lpointer + 1;
          // reset sum
          sum = lpointer[0].toString().length;
          sum += lpointer[0] > 1 ? 1 : 0;
      }
      // if sum is the same as k
      if (sum === k) {
          // check if l and r pointers have bigger difference than before
         if (diff < rpointer - lpointer) {
             // set diff to bigger diff
             diff = rpointer - lpointer;
             // reset l and r pointers
             lpointer++;
             rpointer = lpointer + 1;
             // reset sum
             sum = lpointer[0].toString().length;
             sum += lpointer[0] > 1 ? 1 : 0;
         }
      }
  }

  // return counter to non-nested array
  const consolidated = [];
  for (let i = 0; i < count.length; i++) {
      if (count[i][0] > 1) {
          consolidated.push(count[i][0], count[i][1]);
      } else {
          consolidated.push(count[i][1]);
      }
  }

  // return to string because non nested to get proper length
  const res = consolidated.join('');

  // length minus greatest diff for min string length
  return res.length - diff;
}