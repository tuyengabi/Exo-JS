//je créer une variable pour recuperer le select
let mySelector = document.getElementsByClassName('chooseADate');

//je créer une variable pour recuperer le span
let myChoice = document.querySelector('#valeurListe');

//je créer une fonction qui ajoute la valeur de mySelector à valeurListe
function addMyChoice() {
    myChoice.innerHTML = mySelector[0].value;
}

//j'appelle ma fonction avec un événement onchange qui permet changer la valeur 
mySelector[0].onchange = addMyChoice;