// condition IF
// let age = prompt("saisir votre age");

// if (age < 18){
//     alert('vous etes un(e) mineur(e)');
// }else if( age>=72 ){
//     alert('vous etes senior');
// }else{
//     alert('vous etes un(e) majeur(e)');
// }

// condition SWITCH
let vehicule = prompt(
    "Quel vehicule souhaitez vous ? Peugeot, BMW ,Ferrari"
).toLocaleLowerCase;

let km = prompt("combien de km souhaitez vous faire ?");

const prix = {
    peugeot: 0.4,
    bmw: 0.6,
    ferrari: 0.8,
};

switch (vehicule) {
    case "peugeot": {
        alert("Vous payerez : " + prix.peugeot * km + " £");
        break;
    }
    case "bmw": {
        alert("Vous payerez : " + prix.bmw * km + " £");
        break;
    }
    case "ferrari": {
        alert("Vous payerez : " + prix.ferrari * km + " £");
        break;
    }
    default: {
        alert("Veuillez choisir un vehicule proposé dans la liste");
    }
}
