let myArray = [];
let yourNumber = prompt('give your number: ');

let newArray = Number(yourNumber) + 1;


myArray.push(newArray);

let myBody = document.querySelector('body');

let newElement = document.createElement('p');

let newNumber = document.createTextNode('your numbers: ' + newArray);

newElement.appendChild(newNumber);

myBody.appendChild(newElement);

console.log('my numbers: ' + myArray);
console.log('your number: ' + yourNumber);
console.log('your new string: ' + newArray);


