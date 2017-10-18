//TODO Fix getPow rounding errors from floating point

/*
Every number can be expressed by only one combination (only using + and -)
of unique (only occurs once in the expression at most)
powers of three in a combination of adding and subtracting.
Create a program that outputs the appropriate expression for any given number
*/

/*
*1 = 3^0
*2 = 3^1-3^0
3 = 3^1
4 = 3^1+3^0
*5 = 3^2-3^1-3^0
6 = 3^2-3^1
7 = 3^2-3^1+3^0
8 = 3^2-3^0
9 = 3^2
10= 3^2+3^0
11= 3^2+3^1-3^0
12= 3^2+3^1
13= 3^2+3^1+3^0
*14= 3^3-3^2-3^1-3^0
*/

function PTA(num) {
	for (let i = -14; i < 15; i++) {
		console.log(i+";"+getPow(i));
	}
}

//Returns the highest power of three needed for num to be expressed
function getPow(num) {
	return Math.ceil(Math.log(2*num+1)/Math.log(3))-1;
}

PTA();