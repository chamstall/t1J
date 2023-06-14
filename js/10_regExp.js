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

// ecouter la soumission du formulaire
form.addEventListener("submit", function (e) {
    e.preventDefault();
    if(validEmail(form.email) && validPassword(form.password)){
        form.submit();
    }
});

// ecoute de la modification du mot de passe
form.password.addEventListener("change", function () {
    validPassword(this);
});

// ****************validation Email*****************
const validEmail = function (inputEmail) {
    let emailRegExp = new RegExp(
        // creation reg exp pour validation de l'email
        "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}",
        "g"
    );
    // Récuperation de la balise SMALL
    let small = inputEmail.nextElementSibling;

    // on teste l'expression reguliere
    if (emailRegExp.test(inputEmail.value)) {
        small.innerHTML = "adresse valide";
        small.classList.remove("text-danger");
        small.classList.add("text-success");
        return true;
    } else {
        small.innerHTML = "adresse non valide";
        small.classList.remove("text-success");
        small.classList.add("text-danger");
        return false;
    }
};

// ******************validation password*************
const validPassword = function (inputPassword) {
    let msg;
    let valid = false;
    // au moins 3 caractères
    if(inputPassword.value.length < 3){
        msg = "Le mot de passe doit contenir au moins 3 caractères"
    }
    // au moins 1 maj
    else if(!/[A-Z]/.test(inputPassword.value)){
        msg = "Le mot de passe doit contenir au moins 1 majuscule"
    }
    // au moins 1 min
    else if(!/[a-z]/.test(inputPassword.value)){
        msg = "Le mot de passe doit contenir au moins 1 miniscule"
    }
    // au moins 1 chiffre
    else if(!/[0-9]/.test(inputPassword.value)){
        msg = "Le mot de passe doit contenir au moins 1 chiffre"
    }
    else{
        msg = " le mot de passe est correcte "
        valid = true;
    }
    // affichage
    let small = inputPassword.nextElementSibling;

    // on teste la 
    if (valid) {
        small.innerHTML = "Mot de passe valide";
        small.classList.remove("text-danger");
        small.classList.add("text-success");
        return true;
    } else {
        small.innerHTML = msg ;
        small.classList.remove("text-success");
        small.classList.add("text-danger");
        return false;
    }
};
