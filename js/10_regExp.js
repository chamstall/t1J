// let prenom = "gael";

// // premiere methode pour faire une expression reguliere
// console.log(/b/.test(prenom));

// // 2eme methode pour faire une expression reguliere
// let regExp = new RegExp ("a")
// console.log(regExp.test(prenom));

let form = document.querySelector("#loginForm");

// ecouter la modification de l'email
form.email.addEventListener("change", function () {
    validEmail(this);
});
const validEmail = function (inputEmail) {
    let emailRegExp = new RegExp(
        // creation reg exp pour validation de l'email
        "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}","g"
    );
    // 
    let small = inputEmail.nextElementSibling;

    // on teste l'expression reguliere
    if(emailRegExp.test(inputEmail.value)){
        small.innerHTML = "adresse valide"
    }
    else{
        small.innerHTML = "adresse non valide"
    }
};
