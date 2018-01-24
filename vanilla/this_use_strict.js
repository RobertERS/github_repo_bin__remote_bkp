"use strict"
var o = {
	id:123
}

function getOne(){
	console.log('getOne: ');
	console.log(this);
}

var getTwo = function(){
	console.log('getOne: ');
	console.log(this);
}

var getThree = (function(){
	(console.log('Three: '));
	(console.log(this));
});

var getFour = (function(){
	console.log('Four: ');
	console.log(this);
	//return this;
})();

o.getOne = getOne;
o.getTwo = getTwo;
o.getThree = getThree;
o.getFour = getFour;


// Poniższe dwa przkłady zadziałają tak samo mimo że jest różnica pomiędzy f.declaration i f.expression

var o = {
	id:123
}

Object.defineProperty(o, 'get', {
	value:function(){console.log(this)}	
});

Object.defineProperty(o, 'getExpression', {
	value:(function(){console.log(this)})	
});

// -------------------------------------------


"use strict"
var o = {
	id:123
}

Object.defineProperty(o, 'get', {
	value:function(){console.log(this)}	
});

Object.defineProperty(o, 'getExpression', {
	value:(function(){console.log(this)})()	
});