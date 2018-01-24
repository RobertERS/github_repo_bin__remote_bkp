"use strict"

var revealingModule = (function() {
    
    var privateVar = "Jonh Private";
    var publicVar = "John Public";

    function privateGetName() {
        console.log("Name: " + privateVar);
    }

    function publicSetName(strName) {
        privateVar = strName;
    }

    function publicGetName() {
        privateGetName();
    }

    return {
        setName: publicSetName,
        greeting: publicVar,
        getName: publicGetName
    }

}());

revealingModule.getName()
console.log(revealingModule.greeting);
revealingModule.setName( "Rober Show" );
revealingModule.getName()