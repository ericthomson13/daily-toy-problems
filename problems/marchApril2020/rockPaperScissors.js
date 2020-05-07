/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

const rockPaperScissors =  (rounds) => {
	if (rounds === 0) {
		return [];
	}
	let result = [];
	// helper function to do each round
	const rpsRound = (plays) => {
		// breakout case
		if (plays.length === rounds) {
			result.push(plays);
			return;
		}
		// recursive call
		['r', 'p', 's'].forEach(play => {
			rpsround(plays + play);
		})
  }

	rpsRound('');
	return result;
};

export default rockPaperScissors;
