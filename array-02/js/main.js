let array = [5,15,26,12,78,56];
let yourNumber = prompt('give a number:');


    let myBody = document.querySelector('body');

    let newElement1 = document.createElement('p');

    let bfArray = document.createTextNode('before array: ' + array);

    newElement1.appendChild(bfArray);

    myBody.appendChild(newElement1);

console.log('before numbers: ' + array);

    

    array.push(yourNumber);

    let newElement2 = document.createElement('p');

    let atArray = document.createTextNode('after array: ' + array);

    newElement2.appendChild(atArray);

    myBody.appendChild(newElement2);

console.log('after numbers: ' + array);

console.log('your number ' + yourNumber);

