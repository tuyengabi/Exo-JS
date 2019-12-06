let num = parseInt(prompt('give a number: '));
let i;

for (i = num; i <= num + 10; i++) {
    console.log("The number is " + i );
}

document.getElementById("demo").innerHTML = num;

