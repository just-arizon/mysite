// Preloader Animation Feature

var loader = document.getElementById("preloader");
window.addEventListener("load", () =>{
  loader.style.display = "none"
});

//  Hamburger

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active")
})

document.querySelectorAll(".nav-linkd").forEach(n => n.addEventListener("click", () => {
  navMenu.classList.remove("active")

}))