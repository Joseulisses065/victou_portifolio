const nav = document.querySelector("nav");
const cabecalho = document.querySelector("header");
const menu = document.querySelector(".menu");
const it = document.querySelectorAll(".nav-it");


const sec =document.querySelectorAll("section");
window.addEventListener("scroll",function(){
    cabecalho.classList.toggle("ativado",this.window.scrollY>0)


})

menu.addEventListener("click",function(){
    cabecalho.classList.toggle("ativado",getComputedStyle(nav).top=='-400px')
    nav.classList.toggle("navegacao",getComputedStyle(nav).top=='-400px')
   

})
for(var i=0;i<it.length;i++){
    it[i].addEventListener("click",function(){
            cabecalho.classList.toggle("ativado",getComputedStyle(nav).top=='-400px')
            nav.classList.toggle("navegacao",getComputedStyle(nav).top=='-400px');       
    })
}
