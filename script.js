const header = document.querySelector(".header")
const menuBtn = document.querySelector(".menu-btn")

const toggleFun = function(){
    header.classList.toggle("active")
}

menuBtn.addEventListener('click',toggleFun)


// function doWork(){
//     variable = 11
// }

// doWork()

// variable =12


// if(true){
//     let variable = "hello"
//     console.log(variable)
// }
// console.log(variable)