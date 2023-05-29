// Un événement c'est une sorte de signal qui est envoyé au JavaScript par l'interface DOM. Ce signal est envoyé lorsqu'il se passe quelque chose sur un document qui est visualisé dans un navigateur. Par exemple un clic de souris, le curseur de la souris qui survole une zone, la fin du chargement de la page.
// selectionner toutes les lignes du tableau
let tabTr = document.querySelectorAll(" tbody tr");

// Ajout d'un ecouteur d'evenement au click sur toutes les lignes
for (let tr of tabTr) {
    tr.addEventListener("click", function () {
        this.classList.toggle("gris");
    });
}

document.querySelector("a").addEventListener("click" , function(e){
    e.preventDefault(); //ca permet d'empecher l'evenement par defaut
    let target = this.getAttribute("href");
    let response = confirm("Voulez vous partir du site ?");

    if(response == true ){
        window.location = target;  //redirection vers autre page
    }
    else{
        alert("Merci de rester avec nous");
    }
})
