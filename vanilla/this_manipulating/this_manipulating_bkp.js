        // var a = {
        //     this: console.log('a ' + this)
        // }

        // var b = {
        //     obj: {
        //         this: console.log('b ' + this)
        //     }
        // }

        var literal = function(){
            return {
                this: console.log('c ' + this)
            }
        }

        // c = literal();

        // function createObj(_objName) {
        //     this.objName = _objName;
        // }

        // d = new createObj('john')
        // console.log(d);

// the code of the "foo" function
// never changes, but the "this" value
// differs in every activation
 
function foo() {
  console.dir(this);
}
 
// caller activates "foo" (callee) and
// provides "this" for the callee
 
foo(); // global object
foo.prototype.constructor(); // foo.prototype
 
var bar = {
  baz: foo
};
 
bar.baz(); // bar
 
(bar.baz)(); // also bar
(bar.baz = bar.baz)(); // but here is global object
(bar.baz, bar.baz)(); // also global object
(false || bar.baz)(); // also global object
 
var otherFoo = bar.baz;
otherFoo(); // again global object


  var brand = 'bmw';
  var vmax =  220;

  function get(){
    console.log(this.brand, this.vmax);
    console.log(this);
    console.log('Uppper scope: ');
    console.log(brand, vmax);
  }

  var myCar = {
    brand: 'audi',
    vmax:  250,
    getInMyCarContext: get
  }

// What will the code below output to the console and why?

// var myObject = {
//     foo: "bar",
//     func: function() {
//         var self = this;
//         console.log("outer func:  this.foo = " + this.foo);
//         console.log("outer func:  self.foo = " + self.foo);
//         (function() {
//             console.log("inner func:  this.foo = " + this.foo);
//             console.log("inner func:  self.foo = " + self.foo);
//         }());
//     }
// };
// myObject.func();

var myModule = {
    animals : ['dog', 'cat', 'bird'],
    
    addNewElement : function(newAnimal) {
        var elementToAdd;

        if (typeof newAnimal !== 'string') {
            elementToAdd = document.querySelector('#animal').value();
        } else {
            elementToAdd = newAnimal;
        }

        if (elementToAdd != '') {
        this.animals.push(elementToAdd);
        }
    },
        
    displayList : function() {
        var list = document.querySelector('#list');
        if (list == null) {
            list = document.createElement('ul');
            list.id = list;
            document.querySelector('body').appendChild(list);
        }
        list.innerHTML = '';
        animals.forEach(function(el, i) {
            var element = document.createElement('li');
            element.innerHTML = el;
            list.appendChild(element);
        });
    },

    bindEvents : function() {
        document.querySelector('#number').addEventListener('click', addNewElement.bind(this));
        document.querySelector('#show').addEventListener('click', displayList.bind(this));
    },

    init : function() {
        bindEvents();
        displayList();
    }
}


// var c = function(_id){
//     this.qwer = 123;
//     return {
//         id: function(){
//             this.id = _id;
//         }
//     }
// }

var c = function(_n, _id){
    this.n = _n;
    this._id = _id;
}

var f = function(_n, _id){
    return {
        n: _n,
        id: _id
    }
}

var d = function(_n, _id){
    this.n = _n;
    this.id = _id;
    return {
        get: function(){console.log(this.n,this.id)}
    }
}

var someObj = {

  someData : 'JS context manipulation course'

};

 

function myTest() {

  console.log(this);

}

 

someObj.testThis = myTest;

someObj.testThis();
VM48:11 Object {someData: "JS context manipulation course", testThis: function}
undefined
var someObj = {

  someData : 'JS context manipulation course'

};

 

function myTest() {

  console.log(this);

}

 

someObj.testThis = myTest();

someObj.testThis;
VM53:11 Window {stop: function, open: function, alert: function, confirm: function, prompt: function…}


var someObj = {
    myTest: function(){
        console.log(this);
    },
    someData : 'JS context manipulation course'
};

someObj.testThis = someObj.myTest;

someObj.testThis();