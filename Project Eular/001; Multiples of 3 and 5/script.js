/**
 *If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 *Find the sum of all the multiples of 3 or 5 below 1000.
 */

let max = 1000;
let multiples = [
    3,
    5
];

let sum = 0;

for (let i = 0; i < max; i++) {
    for (let e = 0; e < multiples.length; e++) {
        if (i%multiples[e] == 0) {
            sum += i;
            break;
        }
    }
}

output("Complete; sum is " + sum);