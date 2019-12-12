//creer une tableau avec des valeurs numérique positives ou négatives,
//  ensuite il faut compter le nombre de valeurs positives et le nombre de négatif
//exemple :
// let tab = [12,45,78,-89,-56,-23];
//aficher 3 valeurs positives et 3 valeurs négatives

//je rempli mon tableau
let arr = [1,-5,6,-4,2,8,3,-45,56,-8];

//ja parcours mon tableau et je compte le nb de valeurs + et -

let sumNumPos=0;
let sumNumNeg=0;

arr.forEach(
    function (value, index, array){
        //action de comptage 
        if (value>0) {
            console.log("ce nombre " + value + " est positif");
            sumNumPos += 1; 
        }else {
            console.log("ce nombre " + value + " est negatif");
            sumNumNeg += 1;
        }
    }

);
console.log(sumNumPos+ ' nombres positifs');
console.log(sumNumNeg+ ' nombres négatifs');

// //regle générale
// masculin = ce
// feminin = cette

// //cas particulier
// cet est toujours masculin et commence par une voyelle ou un h muet.