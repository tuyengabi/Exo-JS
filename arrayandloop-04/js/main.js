let arr1 = [4, 8, 7, 9, 1, 5, 4, 6];
let arr2 = [7, 6, 5, 2, 1, 3, 7, 4];

let finalArr = [];

for (let i = 0; i < arr1.length; i++) {
    finalArr.push(arr1[i] + arr2[i]);
}

console.log(finalArr);