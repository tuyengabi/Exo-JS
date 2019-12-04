let myArray = [];
let yourNumber = prompt('give a number:');

myArray.push(yourNumber);


    let myBody = document.querySelector('body');

    let newElement = document.createElement('p');

    let newNumber = document.createTextNode('your numbers: ' + myArray);

    newElement.appendChild(newNumber);

    myBody.appendChild(newElement);




console.log('my numbers: ' + myArray);
console.log('your number ' + yourNumber);

