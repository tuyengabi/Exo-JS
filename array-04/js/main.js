let myArray = [5, 15, 26, 12, 78, 56, 45, 78, 42];


let myBody = document.querySelector('body');

let newElement1 = document.createElement('p');

let newNumber1 = document.createTextNode('3ème case: ' + myArray[2]);

newElement1.appendChild(newNumber1);

myBody.appendChild(newElement1);

let newElement2 = document.createElement('p');

let newNumber2 = document.createTextNode('7ème case: ' + myArray[6]);

newElement2.appendChild(newNumber2);

myBody.appendChild(newElement2);








