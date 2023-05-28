// facons d'ecrire une fonction 

const message = function() { 
    alert("bonjour");
};

message();

// hoisting cela me permet d'appeler la fonction meme quand celle ci n'est pas encore definie
salutation();

function salutation (){
    alert ("bonsoir");
}

// fonction fléchée 

const somme = (a,b) => {
    alert("resultat : "  + (a + b) );
}
somme(10,2);

// function avec parametre 

const message2 = function(texte){
    alert(texte);
}
message2("je suis le texte en parametre");

// function avec parametre optionnel

const message3 = function(texte = "texte par defaut"){
    alert(texte);
}
message3();
message3("je remplace en quelque sorte la valeur par defaut dela var texte");
