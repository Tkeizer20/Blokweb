// JavaScript Document
console.log("hi");

const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav_menu')

hamburger.addEventListener ("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")


    console.log(hamburger)
    console.log (navMenu)
})
