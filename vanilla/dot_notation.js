var calculator = (function(){
var result = 0;
var calculator = {
    add: function(_n){
        if(typeof _n === 'number'){
            result += _n
        }
        return calculator;
    },
    subtract: function(_n){
        if(typeof _n === 'number'){
            result -= _n;
        }
        return calculator;
    },
    multiply: function(_n){
        if(typeof _n === 'number'){
            result *= _n;
        }
        return calculator;
    },
    divide: function(){
        if(typeof _n === 'number' && _n !==0){
            result /= _n;
        }
        return calculator;
    },
    getResult: function() { 
        return result;
    }
};

return calculator;
}());

var result = calculator.add(2).multiply(3).subtract(3).getResult();
console.log(result);