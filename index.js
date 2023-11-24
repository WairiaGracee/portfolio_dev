const bars= document.querySelector(".fa-bars");

const xmark=document.querySelector(".fa-xmark")

const list=document.querySelector(".lists")
bars.addEventListener("click",()=>{

    list.classList.toggle("show")
    
})
console.log(xmark)
xmark.addEventListener("click",()=>{
list.classList.remove("show")


})

const nav=document.querySelector("nav")

window.addEventListener("scroll",()=>{

    nav.classList.toggle("sticky",window.scrollY>100)
})
const typed= new Typed(".auto",{
    strings:["Im Diana","Im an Engineering Student ",],
    typeSpeed:150,
    backSpeed:150,
    loop:true
})