"use strict"

console.log('---- Strings --------------------')

let theString = 'Hello users, it is nice to see you!'

// startsWith()
// endsWith()
// includes()

console.log(theString.startsWith('Hello'));
console.log(theString.endsWith('you!'));
console.log(theString.includes('nice'));

console.log('----- Hex/Bin/Oct -------------------');

//Hex
console.log(0xFF);
//Binary
console.log(0b01010101);
//Octal
console.log(0o543);

console.log('----- Numbers -------------------');

console.log(Number.isFinite(3));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(NaN));

console.log(Number.isNaN(NaN));
console.log(Number.isNaN(1));
console.log(Number.isNaN('String'));

console.log('----- IsInteger -------------------');

console.log(Number.isInteger(1));
console.log(Number.isInteger('1'));
console.log(Number.isInteger(NaN));
console.log(Number.isInteger(Infinity));