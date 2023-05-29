const questions = [
    { 
        question: "quel est le résultat de  1 + 1 ? Choisir le numéro correspondant à la bonne réponse ! \n1. 5 \n2. 2 ",
        reponse: 2 
    },
    { 
        question: "quel est le résultat de  2 + 2 ? Choisir le numéro correspondant à la bonne réponse ! \n1. 4 \n2. 9 ",
        // \n nous permet de faire une entrée càd aller à la ligne
        reponse: 1
    },
    { 
        question: "quel est le résultat de  3 + 3 ? Choisir le numéro correspondant à la bonne réponse ! \n1. 5 \n2. 6 ",
        reponse: 2
    },
];

/**********Debut du Jeu **********/ 
let nbBonneReponse = 0;

for (let i=0; i< questions.length ; i+=1) {
    let repUser = prompt(questions[i].question); 
    if (repUser == questions[i].reponse){ 
        alert("Réponse Bonne");
        nbBonneReponse +=1 ;
    } else {
        alert("Réponse Fausse");
    }
};
if (nbBonneReponse <= 1){
    alert (`vous avez ${nbBonneReponse} bonne réponse sur ${questions.length}`)
}
else{
    alert (`vous avez ${nbBonneReponse} bonnes réponses sur ${questions.length}`)
}

