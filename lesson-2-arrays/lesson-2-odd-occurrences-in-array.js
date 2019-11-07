// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
	// write your code in JavaScript (Node.js 8.9.4)
	if (A.length === 1) {
		return A[0];
	}

	const sortedA = A.sort();
	let response = 0;

	for (let i = 0; i < sortedA.length; i = i + 2) {
		if (sortedA[i] !== sortedA[i + 1]) {
			if (sortedA[i] === sortedA[i - 1]) {
				response = sortedA[i + 1];
			} else if (sortedA[i + 1] === sortedA[i + 2]) {
				response = sortedA[i];
			}
			break;
		}
	}

	return response;
}
