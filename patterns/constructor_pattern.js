"use strict"
// Basic constructor

function CarBasic(model, year, miles) {  
    this.model = model;
    this.year = year;
    this.miles = miles;
    this.toString = function(){
        return this.model + " has done " + this.miles + " miles";
    };
};

var tesla = new CarBasic("Model S", 2016, 12000);
console.log(tesla.toString());

// Constructor with prototype

function CarPro(model, year, miles) {  
    this.model = model;
    this.year = year;
    this.miles = miles;
};

CarPro.prototype.toString = function(){
    return this.model + " has done " + this.miles + " miles";
};

var tesla = new CarPro("Model X", 2017, 2300);
console.log(tesla.toString());
