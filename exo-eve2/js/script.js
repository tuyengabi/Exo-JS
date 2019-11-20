//je récuperer ma section
let myBody = document.querySelector('body');

//je créer un nouveau élément
let newElement = document.createElement('p');

//je créer un élément de text
let newText = document.createTextNode('Commencer sa sieste dès le réveil et ne l’achever qu’au coucher!');



//je créer un fonction qui ajouter l'élément à mon body
function displayText() {

    //j'ajoute le text à l'élément p
    newElement.appendChild(newText);
    //j'ajoute l'élément p à mon body
    myBody.appendChild(newElement);

};

function setColor() {

    document.querySelector('p').style.color = "blue";

};

// let btnPhrase = document.querySelector(".btn");
// btnPhrase.addEventListener('click', setColor);

let btnPhrase = document.querySelector(".btn");
btnPhrase.addEventListener('click', displayText);

