//  repeter une action toutes les X millisecondes
window.setInterval(function(){
    console.log("set interval");
},5000);

// repeter une action apres X millisecondes
window.setTimeout(function(){
    console.log("set timeout");
},5000);

// afficher la date


const horloge = function(){
    let date = new Date ();
    // console.log(date);
    
    // afficher les heures à partir de la date 
    let heures = date.getHours();
    // console.log(heures);
    
    // afficher les minutes à partir de la date 
    let minutes = date.getMinutes();
    
    // afficher les secondes à partir de la date 
    let secondes = date.getSeconds();
    
    if (secondes < 10){
        secondes = "0" + secondes ; 
    }
    if (minutes < 10){
        minutes = "0" + minutes ; 
    } 
    // console.log(minutes);
    // console.log(secondes);
    let affichage = heures + ":" + minutes + ":" + secondes ;
    document.querySelector("#horloge").innerText = affichage;
}
window.setInterval(horloge , 1000);

