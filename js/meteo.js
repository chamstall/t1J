const APIKEY = "3306285f1ea6b7da98f161475ee32a70";

// appel a l'API openweather avec city en parametre de fonction
let apiCall = function(city){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

fetch(url).then((response) =>
    response.json().then((data) => {
        console.log(data);
        document.querySelector("#city").innerHTML =`<i class="fa-solid fa-city"></i>` + data.name;
        document.querySelector("#temp").innerHTML =
            `<i class="fa-solid fa-temperature-half"></i>` +
            data.main.temp +
            "°";
        document.querySelector("#humidity").innerHTML =
            `<i class="fa-solid fa-droplet"></i>` + data.main.humidity + "%";
        document.querySelector("#wind").innerHTML =
            ` <i class="fa-solid fa-wind"></i> ` + data.wind.speed + "km/h";
    })
).catch(err => console.log("erreur :" + err));
}

// ecouteur d'evenement sur la soumission du formulaire 
document.querySelector("form").addEventListener("submit" , function(e){
    e.preventDefault();
    let ville = document.querySelector("#inputCity").value ;
    apiCall(ville);
})

// Appel par defaut au chargement de la page
apiCall("Rouen");
