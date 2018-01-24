"use strict"

// let myArray = [11,22,34,65,34];
// let mySet = new Set(myArray);

// mySet.add('100');
// mySet.add({a: 1, b: 1})
// mySet.delete(22);
// //mySet.clear();
// mySet.add('100');
// mySet.add('200');
// console.log(mySet);
// console.log(mySet.size);
// console.log('--------------------------------------');
// mySet.forEach(function(val){
//     console.log(val);
// });

// console.log('----- Map ----------------------------');

// let myMap = new Map([['a1','Hello'], ['b2','Goodbye']]);
// myMap.set('c3', 'Foo');
// myMap.delete('a1');
// console.log('size of map: ' + myMap.size); 
// console.log(myMap);

//--------------------------------------------------------

// let carWeakSet = new WeakSet();

// let car1 = {
//     make: 'Honda',
//     model: 'Civic'
// }

// let car2 = {
//     make: 'Tesla',
//     model: 'Model S'
// }

// carWeakSet.add(car1);
// carWeakSet.add(car2);

// console.log(carWeakSet);

// carWeakSet.delete(car1);

// console.log(carWeakSet);

//--------------------------------------------------------

let carWeakMap = new WeakMap();

let key1 = {
    id: 1
}

let key2 = {
    id: 2
}

let car1 = {
    make: 'Honda',
    model: 'Civic'
}

let car2 = {
    make: 'Tesla',
    model: 'Model S'
}

carWeakMap.set(key1, car1);
carWeakMap.set(key2, car2);

console.log(carWeakMap);

carWeakMap.delete(key1);

console.log(carWeakMap);