"use strict"

//---- ES6 ------------------------------

function greet($greeting = 'Hello'){
    console.log($greeting);
}

greet();

//---- ES5 ------------------------------

function greet() {
    var $greeting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hello';

    console.log($greeting);
}

greet();

//----------------------------------

//---- Srea------------------------------

let args = [1,2,3];
let args2 = [3,2,1];
let args3 = [1,3,2];

function test(){
    // console.log(args);
    console.log(args+ ',' + args2 + ',' + args3);
}

// ---- Below is ES5 version
// test.apply(null, args);

// ---- Below is ES6 version
test(...args);