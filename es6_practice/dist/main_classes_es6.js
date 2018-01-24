"use strict"

class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    static countUsers(){
        console.log('There are 50 users');
    }

    register(){
        console.log(this.username + ' is now registered');
    }
}

class Member extends User{
    constructor(username, email, password, memberPackage){
        super(username, email, password);
        this.package = memberPackage;
    }

    getPackage(){ 
        console.log(this.username + ' is subscribed to the ' + this.package + ' package');
    }
}

// let bob = new User('Bob', 'bob@bob.com', 'top_secret');
// bob.register();

// User.countUsers();

let mike = new Member('Mike', 'mike@mike.com', 'top-secret', 'Standard');

// mike.getPackage();
mike.register()