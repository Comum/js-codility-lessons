// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
	// write your code in JavaScript (Node.js 8.9.4)
	const binaryArray = N.toString(2).split('');

	let counting = false;
	let lengthArray = [];
	let length = 0;

	binaryArray.forEach((n, index) => {
		if (index > 0) {
			if (Number(n) === 0) {
				counting = true;
				length++;
			} else {
				counting = false;
				lengthArray.push(length);
				length = 0;
			}
		}
	});

	if (counting && lengthArray.length === 0) {
		return 0;
	}

	return Math.max.apply(Math, lengthArray);
}
