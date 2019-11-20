

//je créer un fonction qui ajouter l'élément à mon body
function displayText() {

//je récuperer ma section
let myBody = document.querySelector('body');

//je créer un nouveau élément
let newElement = document.createElement('p');

//je créer un élément de text
let newText = document.createTextNode('Commencer sa sieste dès le réveil et ne l’achever qu’au coucher!');
    
    //j'ajoute le text à l'élément p
    newElement.appendChild(newText);
    //j'ajoute l'élément p à mon body
    myBody.appendChild(newElement);

};

let btnPhrase = document.querySelector(".btn");
btnPhrase.addEventListener('click',displayText);