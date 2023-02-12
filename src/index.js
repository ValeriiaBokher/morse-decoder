const MORSE_TABLE = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
};

function decode(expr) {
	let exp = expr.match(/.{1,10}/g);
	for (let i = 0; i < exp.length; i++) {
		while (exp[i][0] == '0') {
			exp[i] = exp[i].slice(1);
		}
	}
	//console.log(exp);
	let simb = [];
	for (let i = 0; i < exp.length; i++) {
		let str = '';
		for (j = 0; j < exp[i].length; j += 2) {
			let letter = exp[i][j] + exp[i][j + 1];
			if (exp[i][0] == '*') {
				exp[i] = ' ';
			} else if (letter == '10') {
				letter = '.';
				str += letter;
				//console.log(letter);
			} else if (letter == '11') {
				letter = '-';
				str += letter;
			}
		}
		simb.push(str);
	}

	for (let i = 0; i < simb.length; i++) {
		let str1 = '';
		for (let j = 0; j < Object.keys(MORSE_TABLE).length; j++) {
			if (simb[i] == '') {
				simb[i] = ' ';
			}
			if (simb[i] == Object.keys(MORSE_TABLE)[j]) {
				simb[i] = Object.values(MORSE_TABLE)[j];
			}
		}
	}
	return simb.join('');
}

module.exports = {
	decode,
};
