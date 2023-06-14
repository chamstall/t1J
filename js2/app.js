// creation de la promesse
const promiseGetUsers = new Promise(function (resolve, reject) {
    //je pouvait ecrire new Promise((resolve,reject)=>{ avec une fonction flechée
    // })
    if (typeof USERS !== "undefined") {
        resolve(USERS);
    } else {
        reject("accès aux users impossible");
    }
});

// Recuperer l'etat de la promesse

promiseGetUsers
    .then(function (u) {
        //lorsqu'on a un seul parametre dans le cas de la  fonction flechée on peut ne pas ecrire les parentheses
        // on peut ecrire .then(u =>{
        // })
        let liste = "<ul>";
        for (let user of u) {
            liste += `<li> ${user.name} </li>`;
        }
        liste += "</ul>";
        document.querySelector("#users").innerHTML = liste;
    })
    .catch(function (e) {
        console.log(e);
    });

// ********************News

// creation de la promesse
const promiseGetNews = new Promise(function (resolve, reject) {
    if (typeof NEWS !== "undefined") {
        resolve(NEWS);
    } else {
        reject("impossible aux news impossible");
    }
});

// Recuperation de l'etat de la promesse
promiseGetNews
    .then(function (n) {
        let liste = "<ul>";
        for (let actu of n) {
            liste += `<li> ${actu.title} </li>`;
        }
        liste += "</ul>";
        document.querySelector("#news").innerHTML = liste;
    })
    .catch(function (e) {
        console.log(e);
    });
    //pour les fonctions flechées ,lorsqu'on a qu'une seule action à faire les accolades ne sont peuvent etre homis
    // on peut ecrire .catch (e => console.log(e));
