// var b = setTimeout(function() {
//     console.log('hi');
// }, 2000);

var constructorL = function (_name, _id) {
    return {
            name: _name,
            id: _id,
    }
     
}

var constructorO = function(_name, _id){
    this.name = _name;
    this.id = _id;
}

constructorO.prototype.hi = function(){console.log('Hello')};