/**
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
 */

function isPalindrome(num) {
    //Convert num to string
    let sNum = num+"";
    //Compare string to reversed string (convert to array of characters, reverse, then join to string)
    return sNum == sNum.split("").reverse().join("");
}

function start() {
    /*let i = 999;
    let e = 999;

    do {
        if (isPalindrome(e*i)) {
            output(i*e + " is " + e + " * " + i);
            return;
        }

        if ((i-1)*e < i*(e-1) ) {
            e--;
        } else {
            i--;
        }
    } while (true);*/

    
    let l = 0;

    for (let i = 999; i > 99; i--) {
        for (let e = 999; e > 99; e--) {
            if (isPalindrome(e*i)) {
                if (e*i > l) {
                    l = e*i;
                    output("New largest; " + l + " is " + i + " * " + e);
                }
            }
        }
    }
    
}

start();