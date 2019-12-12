let arr = [5,10,15,17,6,18,12,7,6,2,14];
let sum = 0;

//calculer la somme des notes 
for (let i = 0; i < arr.length; i++) {
    console.log(i);
    sum += arr[i];
}

let average = sum / arr.length;

//on peut arrondir la valeur
average = Math.round(average);
console.log(average);

