let myArray = [5, 15, 26, 12, 78, 56, 45, 78, 42];
let myArray2 = [5, 15, 26, 12, 78, 56, 45, 78, 42];

let myBody = document.querySelector('body');

let newElement1 = document.createElement('p');

let newNumber = document.createTextNode('before array: ' + myArray);

newElement1.appendChild(newNumber);

myBody.appendChild(newElement1);

console.log('tableau avant : ');
console.table(myArray);

let temporaire = myArray2[2]; // vaut 26
myArray2[2] = myArray2[myArray2.length - 1];
myArray2[myArray2.length - 1] = temporaire;

console.log('tableau après : ');
console.table(myArray2);


let newElement2 = document.createElement('p');

let newNumber2 = document.createTextNode('after array: ' + myArray2);

newElement2.appendChild(newNumber2);

myBody.appendChild(newElement2);

/*

function arrayMove(arr, old_index, new_index) {
        while (old_index < 0) {
            old_index += arr.length;
        }
        while (new_index < 0) {
            new_index += arr.length;
        }
        if (new_index >= arr.length) {
            var k = new_index - arr.length + 1;
            while (k--) {
                arr.Push(undefined);
            }
        }
        arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
        return arr; // for testing purposes
    };

    console.log(arrayMove(myArray, -1, 2));
    console.log(arrayMove(myArray, 3, -1));

    */






