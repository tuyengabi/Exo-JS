let arr = [5, 15, 26, 12, 78, 56, 45, 78, 42];

console.log('tableau avant : ');
console.table(arr);

let temporaire = arr[2]; // vaut 26
arr[2] = arr[arr.length - 1];
arr[arr.length - 1] = temporaire;

console.log('tableau après : ');
console.table(arr);