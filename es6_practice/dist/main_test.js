"use strict"

// var a = 'lala';
// let b = 'sasa'
// console.log(a);
// console.log(b);

//-----------------------------------------

// function testVar() {
//     var a = 30;
//     if (true) {
//         var a = 50;
//         console.log(a);
//     }
//     console.log(a);
// }

// testVar();

//-----------------------------------------

// function testLet(){
//     let a = 30;
//     if (true) {
//         let a = 50;
//         console.log('inside: ' + a);
//     }
//     console.log('outside: ' + a);
// }

// testLet();

//-----------------------------------------

// for (var index = 0; index < 10; index+=1) {
//     console.log(index);   
// }
// console.log('Outside: ' + index);

//-----------------------------------------

// for (let index = 0; index < 10; index+=1) {
//     console.log(index);   
// }
// console.log('Outside: ' + index);

//-----------------------------------------

const colors = [];
colors.push('red');
colors.push('blue');
console.log(colors);

colors[0] = 'green';
console.log(colors);

colors = 'yellow';
console.log(colors);