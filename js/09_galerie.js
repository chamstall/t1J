const images = document.querySelectorAll("#galery img");

let imgActive = 0;
images[imgActive].classList.add("show");

// masquer les photos sauf la 1ere
for (let i = 1; i < images.length; i += 1) {
    images[i].classList.add("hidden");
}

// clic sur le bouton suivant
document.querySelector("#next").addEventListener("click", function () {
    next();
});

// FONCTION POUR PHOTO suivante
const next = function(){
    images[imgActive].classList.add("hidden");
    images[imgActive].classList.remove("show");
    imgActive += 1;
    if (imgActive >= images.length) {
        imgActive = 0;
    }
    images[imgActive].classList.remove("hidden");

    setTimeout(function () {
        images[imgActive].classList.add("show");
    }, 200);
};


// clic sur le bouton precedent
document.querySelector("#prev").addEventListener("click",function(){
    prev();
})

// FONCTION POUR PHOTO suivante
const prev = function(){
    images[imgActive].classList.add("hidden");
    images[imgActive].classList.remove("show");
    imgActive -=1 ;
    if(imgActive < 0){
        imgActive = 3 ;
    }
    images[imgActive].classList.remove("hidden");
    setTimeout(function(){
        images[imgActive].classList.add("show");
    },200);

}

// clic sur le bouton play
let interval ;
document.querySelector("#play").addEventListener("click",function(){
    interval = setInterval(next ,2000 )
})

// clic sur le bouton pause
document.querySelector("#pause").addEventListener("click",function(){
    clearInterval(interval);
})
