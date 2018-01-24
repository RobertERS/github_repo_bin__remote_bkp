"use strict"

let template = '<h1>Hello</h1>' +
'<p>This is a simple template in JavaScript</p>';
document.getElementById('template').innerHTML = template;

let name = 'John';
function makeUpperCase(word){
    return word.toUpperCase();
}

let template2 = 
`<h1>${makeUpperCase('Hello')}, ${name}</h1>
<p>This is a simple template2 in JavaScript</p>`;
document.getElementById('template2').innerHTML = template2;
