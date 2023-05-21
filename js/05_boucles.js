// boucle FOR
for( let i = 0; i<3; i+=1) {
    console.log("Boucle : " + i);
}

// parcourir un tableau
let tab = ["pommes" ,"fraises" , "poires"];

console.log("--for--"); 

for (let i = 0; i < tab.length; i+=1){
    console.log(tab[i]);
}

console.log("--while--"); 
let j = 0;
while (j < tab.length){
    console.log(tab[j]);
    j+=1;
}

console.log("--Do while--"); 
let k = 0;
do {
    console.log(tab[k]);
    k+=1;
} while (k < tab.length);

// FOR IN :iterer sur les clés d'un objet
console.log("--FOR IN--")
let voiture  = {marque:"peugeot", moteur:"essence"};
for(let k in voiture ){
    console.log(k);
}

// FOR OF :iterer sur les valeurs d'un tableau
console.log("--FOR OF--")
let tab2 =["bleu","blanc","rouge"];
for(let v of tab2 ){
    console.log(v);
}