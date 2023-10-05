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







function openPopup() {
    var popup = document.getElementById("popup");
    popup.classList.add("open-popup");
}


function closePopup() {
    var popup = document.getElementById("popup");
    popup.classList.remove("open-popup");
}

const hiddenNav= document.querySelector('hidden_nav')

window.addEventListener("scroll", function () {
    if (window.scrollY >= 300) {
      document.querySelector(".hidden_nav").classList.add("active");
    } else {
      document.querySelector(".hidden_nav").classList.remove("active");
    }
  });

//Bron:
  


const hamburger2 = document.querySelector('.hamburger2')

hamburger.addEventListener ("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")


    console.log(hamburger)
    console.log (navMenu)
})
