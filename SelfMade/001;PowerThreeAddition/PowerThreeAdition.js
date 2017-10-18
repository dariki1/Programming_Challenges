//TODO Fix getPow rounding errors from floating point

/*
Every positive whole number can be expressed by only one combination (only using + and -)
of unique (only occurs once in the expression at most)
powers of three in a combination of adding and subtracting.
Create a program that outputs the appropriate expression for any given positive whole number
*/

/*
*0 = 0
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
	for (let i = 0; i <= 121; i++) {
		console.log(getExpression(i));
	}
}

function getExpression(num) {
	let ret = num + " = ";
	while (num != 0) {
		let tPow = getHPow(num);
		if (num < 0) {
			ret += "- ";
		} else {
			ret += "+ ";
		}
		ret += "3^" + tPow + " ";
		num += Math.pow(3,tPow)*Math.sign(num)*-1;
	}
	return ret;
}

//Returns the highest power of three needed for num to be expressed
function getHPow(num) {
	num = Math.abs(num);
	let ret = Math.log(2*num+1)/Math.log(3);
	//This 'fixes' the rounding error caused by floating point rounding errors
	ret *= 1000;
	ret = Math.floor(ret);
	ret /= 1000;
	
	return Math.ceil(ret)-1;
}

PTA();