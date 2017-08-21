/**
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10,001st prime number?
 */

let n = 2;
output("1 prime; 2");
output("2 prime; 3");

for (let i = 5; n < 10001; i += 6) {
    for (let e = 0; e <= 2; e += 2) {
        if (isPrime(i+e)) {
            n++;
            output(n + " prime; " + (i+e));
        }
    }
}

function isPrime(num) {
    for (let i = 5; i <= Math.floor(Math.sqrt(num)); i++) {
        for (let e = 0; e <= 2; e += 2) {
            if (num % (e+i) == 0) {
                return false;
            }
        }
    }

    return true;
}