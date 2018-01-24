// // Global Scope

// var globalValueA = 101;

// // Caution! They are different value recived in Web browser and node
// // WB - Web Broser 
// // N - Node

// console.log(globalValueA); // WB and N work the same way
// console.log(this); // WB = Window-global; N = {}
// console.log(this.globalValueA); // WB = 101; N = undefined

// // Global Scope END -------------------------------------------------------------------------------------------

// // // In case of a function context, this value in every single function call may be different.

// function showValue(){
//     console.log(this);
// }

// showValue(); // // WB = Window-global; N = {} - global

// var q = {
//     get : showValue // Reference to function declaration
// }

// q.get();

// var w = {
//     get : showValue(), // Function expression
//     anotherGet: (showValue)(), // Function expresion
// }

// w.get;
// w.anotherGet;

// // // In case of a function context, this value in every single function call may be different. END ----------------

var get = function(){
    console.log(this);
}

var myLit = {
    id: 123,
    getInside: get()
}

get.call(myLit);

function getThis(){
    console.log(this);
}

var abc = {
	id:'Jestem abc',
	getThis: getThis
}

var cba = {
	id:'Jestem cba',
	getThis: abc.getThis
}


getThis()
this_manipulating.js:51 Window {stop: function, open: function, alert: function, confirm: function, prompt: function…}
undefined
abc.getThis()
this_manipulating.js:51 Object {id: "Jestem abc", getThis: function}
undefined
cba.getThis()
this_manipulating.js:51 Object {id: "Jestem cba", getThis: function}
undefined
getThis.call(abc)
this_manipulating.js:51 Object {id: "Jestem abc", getThis: function}
undefined
getThis.call(cba)
this_manipulating.js:51 Object {id: "Jestem cba", getThis: function}
undefined
getThis.call(abc.getThis())
this_manipulating.js:51 Object {id: "Jestem abc", getThis: function}getThis: function getThis()id: "Jestem abc"__proto__: Object
this_manipulating.js:51 Window {stop: function, open: function, alert: function, confirm: function, prompt: function…}
undefined
getThis.call(this)
this_manipulating.js:51 Window {stop: function, open: function, alert: function, confirm: function, prompt: function…}
undefined
console.dir(abc.getThis())
this_manipulating.js:51 Object {id: "Jestem abc", getThis: function}getThis: function getThis()id: "Jestem abc"__proto__: Objectconstructor: function Object()hasOwnProperty: function hasOwnProperty()isPrototypeOf: function isPrototypeOf()propertyIsEnumerable: function propertyIsEnumerable()toLocaleString: function toLocaleString()toString: function toString()valueOf: function valueOf()__defineGetter__: function __defineGetter__()__defineSetter__: function __defineSetter__()__lookupGetter__: function __lookupGetter__()__lookupSetter__: function __lookupSetter__()get __proto__: function __proto__()set __proto__: function __proto__()
VM661:1 undefined
undefined
typeof(abc)
"object"
abc.prototype
undefined
object.isPrototypeOf(abc)
VM735:1 Uncaught ReferenceError: object is not defined
    at <anonymous>:1:1
(anonymous) @ VM735:1
object.isPrototypeOf
VM744:1 Uncaught ReferenceError: object is not defined
    at <anonymous>:1:1
(anonymous) @ VM744:1
isPrototypeOf(abc)
VM753:1 Uncaught TypeError: Cannot convert undefined or null to object
    at isPrototypeOf (native)
    at <anonymous>:1:1
(anonymous) @ VM753:1
Object.getPrototypeOf(abc) 
Object {__defineGetter__: function, __defineSetter__: function, hasOwnProperty: function, __lookupGetter__: function, __lookupSetter__: function…}
Object.getPrototypeOf(Object.getPrototypeOf(abc) )
null
Object.defineProperty(abc, val, 123)
VM826:1 Uncaught ReferenceError: val is not defined
    at <anonymous>:1:28
(anonymous) @ VM826:1
Object.defineProperty(abc, val, {value:123})
VM829:1 Uncaught ReferenceError: val is not defined
    at <anonymous>:1:28
(anonymous) @ VM829:1
Object.defineProperty(abc, 'val', {value:123})
Object {id: "Jestem abc", val: 123, getThis: function}
abc
Object {id: "Jestem abc", val: 123, getThis: function}
abc.hehe = 'hihi'
"hihi"
abc
Object {id: "Jestem abc", hehe: "hihi", val: 123, getThis: function}
function(_name){
	this.name = _name;
}
VM922:1 Uncaught SyntaxError: Unexpected token (
function creator(_name){
	this.name = _name;
}
undefined
var zxc = new creator('Zenon')
undefined
zxc
creator {name: "Zenon"}name: "Zenon"__proto__: Object
zxc.__proto__
Object {constructor: function}constructor: function creator(_name)__proto__: Object
abc.__proto__
Object {__defineGetter__: function, __defineSetter__: function, hasOwnProperty: function, __lookupGetter__: function, __lookupSetter__: function…}
creator.prototype.get = function(console.log(this.name))
VM1166:1 Uncaught SyntaxError: Unexpected token .
creator.prototype.get = function(){console.log(this.name)}
function (){console.log(this.name)}
abc.__proto__
Object {__defineGetter__: function, __defineSetter__: function, hasOwnProperty: function, __lookupGetter__: function, __lookupSetter__: function…}
zxc.__proto__
Object {get: function, constructor: function}get: function ()arguments: nullcaller: nulllength: 0name: ""prototype: Object__proto__: function ()[[FunctionLocation]]: VM1174:1[[Scopes]]: Scopes[1]0: Globalconstructor: function creator(_name)__proto__: Object
zxc.get()
VM1174:1 Zenon
undefined
Object.defineProperty(zxc, 'city', {value: 'Katowice'}){}
VM1251:1 Uncaught SyntaxError: Unexpected token {
Object.defineProperty(zxc, 'city', {value: 'Katowice'})
creator {name: "Zenon", city: "Katowice"}
zxc
creator {name: "Zenon", city: "Katowice"}name: "Zenon"city: "Katowice"__proto__: Objectget: function ()arguments: nullcaller: nulllength: 0name: ""prototype: Object__proto__: function ()[[FunctionLocation]]: VM1174:1[[Scopes]]: Scopes[1]constructor: function creator(_name)__proto__: Objectconstructor: function Object()hasOwnProperty: function hasOwnProperty()isPrototypeOf: function isPrototypeOf()propertyIsEnumerable: function propertyIsEnumerable()toLocaleString: function toLocaleString()toString: function toString()valueOf: function valueOf()__defineGetter__: function __defineGetter__()__defineSetter__: function __defineSetter__()__lookupGetter__: function __lookupGetter__()__lookupSetter__: function __lookupSetter__()get __proto__: function __proto__()set __proto__: function __proto__()
var asd = new creator('Johan')
undefined
asd
creator {name: "Johan"}
abc
Object {id: "Jestem abc", hehe: "hihi", val: 123, getThis: function}getThis: function getThis()hehe: "hihi"id: "Jestem abc"val: 123__proto__: Objectconstructor: function Object()hasOwnProperty: function hasOwnProperty()isPrototypeOf: function isPrototypeOf()propertyIsEnumerable: function propertyIsEnumerable()toLocaleString: function toLocaleString()toString: function toString()valueOf: function valueOf()__defineGetter__: function __defineGetter__()__defineSetter__: function __defineSetter__()__lookupGetter__: function __lookupGetter__()__lookupSetter__: function __lookupSetter__()get __proto__: function __proto__()set __proto__: function __proto__()


zxc instanceof creator
true