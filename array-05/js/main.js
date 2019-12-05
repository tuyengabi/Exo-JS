let myArray = [5, 15, 26, 12, 78, 56, 45, 78, 42];
console.log(myArray);

let myBody = document.querySelector('body');

let newElement1 = document.createElement('p');

let newNumber1 = document.createTextNode('before array' + myArray);

newElement1.appendChild(newNumber1);

myBody.appendChild(newElement1);


let fifth = myArray.splice(4,1);

console.log(fifth);
console.log(myArray);

let newElement2 = document.createElement('p');

let newNumber2 = document.createTextNode('after array' + myArray);

newElement2.appendChild(newNumber2);

myBody.appendChild(newElement2);








