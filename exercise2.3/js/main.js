
let montantHt = prompt("donne le montant de HT:");
let nombre = prompt("donne le nombre d'article:");
let tauxTva = prompt("donne le taux de TVA:");

let ttc = Math.round(montantHt * (1 + (tauxTva/100)));
let facture = Math.round(ttc * nombre);

console.log("Prix HT de l'article: " + montantHt );
console.log("Le taux de TVA est de: " + tauxTva);
console.log("Nombre d'article: " + nombre);
console.log("Prix TTC de l'article: " + ttc);
console.log("Prix paiment: " + facture);
