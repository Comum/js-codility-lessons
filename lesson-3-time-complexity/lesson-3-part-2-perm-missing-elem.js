/**
 * An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.
 *
 * Your goal is to find that missing element.
 *
 * Write a function:
 *
 * function solution(A);
 *
 * that, given an array A, returns the value of the missing element.
 *
 * For example, given array A such that:
 *
 *   A[0] = 2
 *   A[1] = 3
 *   A[2] = 1
 *   A[3] = 5
 * the function should return 4, as it is the missing element.
 *
 * Write an efficient algorithm for the following assumptions:
 *
 * - N is an integer within the range [0..100,000];
 * - the elements of A are all distinct;
 * - each element of array A is an integer within the range [1..(N + 1)].
 */

function solution(A) {
	let response = 0;

	if (!A.length) {
		return 1;
	}

	if (A.length === 1) {
		if (A[0] === 1) {
			return 2;
		} else {
			return 1;
		}
	} else {
		A.sort(function(a, b) {
			return a - b;
		});

		if (A[0] !== 1) {
			return 1;
		}

		const arrayLength = A.length;
		let missingInTheMiddle = true;
		let i;

		for (let i = 1; i < arrayLength; i++) {
			if (A[i] - 1 !== A[i - 1]) {
				response = A[i] - 1;
				missingInTheMiddle = false;
				break;
			}
		}

		if (missingInTheMiddle) {
			response = A[arrayLength - 1] + 1;
		}
	}

	return response;
}
