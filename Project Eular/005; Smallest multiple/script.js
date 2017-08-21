/**
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

//Finds smallest positive number that is evenly divisible by all of the numbers from 1 to target
let target = 20;


function getPrimes(num) {
    let ret = [];

    let base = soloPrimes(num);
    output("Unique primes; " + base);

    for (let i = 0; i < base.length; i++) {
        let cNum = 1;
        do {
            cNum *= base[i];
            ret.push(base[i]);
        } while (cNum <= num);
        ret.pop();
    }
    
    output("Prime factorisation; " + ret);

    let tot = 1;
    for (let i = 0; i < ret.length; i++) {
        tot *= ret[i];
    }
    output("Answer; " + tot);
}

function soloPrimes(num) {
    let ret = [];
    for (let i = 0; i <= num; i++) {
        if (isPrime(i)) {
            ret.push(i);
        }
    }
    return ret;
}

function isPrime(num) {
    //Really need to cut out the first two if statements somehow
    if (num < 2) {
        return false;
    }

    if (num == 2 || num == 3) {
        return true;
    }

    let divSix = num % 6;
    if (!(divSix == 1 || divSix == 5)) {
        return false;
    }

    for (let i = 5; i <= Math.floor(Math.sqrt(num)); i++) {
        for (let e = 0; e <= 2; e += 2) {
            if (num % (e*i) == 0) {
                return false;
            }
        }
    }

    return true;
}

getPrimes(target);