/**
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
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