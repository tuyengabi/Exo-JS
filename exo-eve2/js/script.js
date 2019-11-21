//je récuperer ma section
let myBody = document.querySelector('body');

//je créer un nouveau élément
let newElement = document.createElement('p');

//je créer un élément de text
let newText = document.createTextNode('Commencer sa sieste dès le réveil et ne l’achever qu’au coucher!');



//je créer une fonction qui ajouter l'élément texte bleu à mon body
function displayText() {

    //j'ajoute le text à l'élément p
    newElement.appendChild(newText);
    //j'ajoute l'élément p à mon body
    myBody.appendChild(newElement).style.color = "cyan";

};

//j'appelle la fonction displayText 
let btnPhrase = document.querySelector(".btndisplay");
btnPhrase.addEventListener('click', displayText);

//je créer une fonction qui change la couleur de texte
function changeColor() {
    // let newColor = document.getElementsByTagName('p')[0];
    let newColor = document.querySelector('p');
    newColor.style.color = "magenta";

};

//j'appelle la fonction changeColor
let btnChangeColor = document.querySelector(".btnRed");
btnChangeColor.addEventListener('click', changeColor);

