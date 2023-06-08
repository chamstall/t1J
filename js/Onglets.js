let tabLi = document.querySelectorAll("ul li");


tabLi[0].classList.add("bg");
document.getElementById("div2").classList.add("d-none");
document.getElementById("div3").classList.add("d-none");

tabLi[0].addEventListener("click", function () {
    tabLi[1].classList.remove("bg");
    tabLi[2].classList.remove("bg");
    document.getElementById("div1").classList.remove("d-none");
    document.getElementById("div2").classList.add("d-none");
    document.getElementById("div3").classList.add("d-none");
});

tabLi[1].addEventListener("click", function () {
    this.classList.add("bg");
    tabLi[0].classList.remove("bg");
    tabLi[2].classList.remove("bg");
    document.getElementById("div1").classList.add("d-none");
    document.getElementById("div2").classList.remove("d-none");
    document.getElementById("div3").classList.add("d-none");
});

tabLi[2].addEventListener("click", function () {
    this.classList.add("bg");
    tabLi[0].classList.remove("bg");
    tabLi[1].classList.remove("bg");
    document.getElementById("div1").classList.add("d-none");
    document.getElementById("div2").classList.add("d-none");
    document.getElementById("div3").classList.remove("d-none");
});
