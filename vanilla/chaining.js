    var calculator = (function() {
    var result = 0;
    var calculator = {
    add: function(n) {
    if (typeof n === "number") {
    result += n;
    }
    return calculator;
    },
    subtract: function(n) {
    if (typeof n === "number") {
    result -= n;
    }
    return calculator;
    },
    multiply: function(n) {
    if (typeof n === "number") {
    result *= n;
    }
    return calculator;
    },
    divide: function(n) {
    if (typeof n === "number" && n !== 0) {
    result /= n;
    }
    return calculator;
    },
    getResult: function() { return result; }
    };
    return calculator;
    })();

var calculator = (function() {
var result = 0;
var self = this;
var calculator = {
    getSelf: function(self){
        console.log(self);
    },	
    getThis: function(){
        console.log(this);
    },
    add: function(n) {
    if (typeof n === "number") {
    result += n;
    }
    return calculator;
    },
    subtract: function(n) {
    if (typeof n === "number") {
    result -= n;
    }
    return calculator;
    },
    multiply: function(n) {
    if (typeof n === "number") {
    result *= n;
    }
    return calculator;
    },
    divide: function(n) {
    if (typeof n === "number" && n !== 0) {
    result /= n;
    }
    return calculator;
    },
    getResult: function() { return result; }
    };	
    return calculator;
})();