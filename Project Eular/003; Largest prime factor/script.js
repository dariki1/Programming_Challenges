/**
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
 */
 
//All composite numbers have a prime factor that is <= it's square root
//The smallest factor of a number (excluding 1) must be a prime
//By dividing a number by it's smallest prime factor, then repeating on the remainder until it is a prime will yield the largest prime factor


function primeDecomp(num) {
    let ret = [];
    let sqrt = Math.floor(Math.sqrt(num));

    if (num % 2 == 0) {
        if (num != 2) {
            ret.push(2)
            output("Adding 2");
            ret.push(primeDecomp(num / 2));
            return ret;
        }
        return ret;
    }
    if (num % 3 == 0) {
        if (num != 3) {
            ret.push(3)
            output("Adding 3");
            ret.push(primeDecomp(num / 3));
            return ret;
        }
        return ret;
    }

    for (let i = 5; i <= sqrt; i += 6) {
        for (let e = 0; e <= 2; e += 2) {
            if (num % (i+e) == 0) {
                ret.push(i+e)
                output("Adding " + (i+e));
                ret.push(primeDecomp(num / (i+e)));
                return ret;
            }
        }
    }

    ret.push(num);
    output("Adding " + num);
    return ret;
}

output("Prime decomposition is " + primeDecomp(600851475143));