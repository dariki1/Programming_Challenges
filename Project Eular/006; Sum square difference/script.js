/**
The sum of the squares of the first ten natural numbers is,
1^2 + 2^2 + ... + 10^2 = 385

The square of the sum of the first ten natural numbers is,
(1 + 2 + ... + 10)^2 = 552 = 3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 */

function findDiff(num) {
    let sumS = sumSquare(num);
    output(sumS);
    let squareS = squareSum(num);
    output(squareS);
    output(squareS-sumS);
}

function sumSquare(num) {
    let ret = 0;
    for (let i = 1; i <= num; i++) {
        ret += Math.pow(i,2);
    }
    return ret;
}

function squareSum(num) {
    let ret = 0;
    for (let i = 1; i <= num; i++) {
        ret += i;
    }
    return Math.pow(ret,2);
}

findDiff(100);