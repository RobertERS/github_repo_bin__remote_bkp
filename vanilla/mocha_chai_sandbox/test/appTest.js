const assert = require('chai').assert;
// const sayHello = require('../app').sayHello;
// const addNumbers = require('../app').addNumbers;
const app = require('../app');

sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(4,5);


describe('App', function(){
    describe('sayHello', function(){
        it('app should return hello', function(){
            //let result = sayHello();
            assert.equal(sayHelloResult, 'hello');
        });
    
        it('sayHello should return type string', function(){
            //let result = sayHello();
            assert.typeOf(sayHelloResult, 'string');
        });
    });

    describe('addNumbers', function(){
        it('addNumbers should be above 5', function(){
            //let result = addNumbers(3, 5);
            assert.isAbove(addNumbersResult, 5);
        });
    
        it('addNumers should return number', function(){
            //let result = addNumbers(4,3);
            assert.isNumber(addNumbersResult, 'number')
        });
    });
});