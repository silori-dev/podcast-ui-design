const header = document.querySelector(".header")
const menuBtn = document.querySelector(".menu-btn")

const toggleFun = function(){
    header.classList.toggle("active")
}

menuBtn.addEventListener('click',toggleFun)