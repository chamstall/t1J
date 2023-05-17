// variable + affectation

let prenom = "gael"; //string

let age = "47"; //number

let enLigne = true;  //boolean

let choix = null; //null

console.log(typeof prenom);
console.log (typeof enLigne);
console.log(typeof choix);

// concatenation
console.log(prenom + " " + age + " ans" );
console.log(`je m'appelle ${prenom}, j'ai ${age} ans` );

// echapper un caractère antislash 
console.log('il fait "beau ajourd\'hui" ');

age= 20;
console.log(`je m'appelle ${prenom}, j'ai ${age} ans` );

// Array
let tab = [ "pommes" , 30 , true , ["bleu" ,"rouge"] ];
console.log(tab);

// grandeur du tableau
console.log(tab.length);

// recuperer l'index 1 du premier tableau
console.log(tab[1]);

// recuperer le mot rouge du deuxieme tableau
console.log(tab[3][1]);

// object
let personne = { 
    prenom: "stratege",
    age:47,
    adresse : { 
        rue: "12 rue de la mare ",
        ville:"Rouen"
    }
};
console.log(personne.prenom  ); //c'est une methode
console.log(personne["prenom"] ); //c'est une autre methode
console.log(personne.adresse.rue );

let a = 5;
let b = 2;

// Addition 
console.log(a + b);
//soustraction
console.log(a-b);
// multiplication
console.log(a * b);
// division
console.log(a / b);
// modulo
console.log(a % b);

// incrementer
a +=1; //equivaut à : a = a + 1 equivaut à: a++
console.log(a);

// décrementer
b -=1; //equivaut à : b = b - 1 equivaut à: b--
console.log(b);

