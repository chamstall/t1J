const icone = '  <i class="fa-solid fa-check" style="color: #00c800; margin-left:10px;"></i>'

let tabLi = document.querySelectorAll ("ul li");

for (let li of tabLi ){
    li.addEventListener("click", function(){
        this.classList.toggle("active");
        if(this.classList.contains("active")){
            this.innerHTML = this.innerText + icone
        }
        else{
            this.innerHTML = this.innerText
        }
    });
}