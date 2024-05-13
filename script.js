/* mobile menu */
const mobMenuClose = document.getElementById("close");
const mobSideMenu = document.querySelector(".menu__mobile-container");

const mobMenuOpen = document.getElementById("open");
const menuShadow = document.querySelector(".menu__shadow");

const body = document.querySelector("body");

mobMenuOpen.addEventListener("click", function() {
    mobSideMenu.classList.add("show");
    body.classList.add("overflow");
})

mobMenuClose.addEventListener("click", function() {
    body.classList.remove("overflow");
    mobSideMenu.classList.remove("show");
})

menuShadow.addEventListener("click", function() {
    body.classList.remove("overflow");
    mobSideMenu.classList.remove("show");
})
/* drop-down menu */
const feature = document.querySelectorAll("#feature");
const company = document.querySelectorAll("#company");

const down = document.getElementById("down");
const up = document.getElementById("up");
const downSec = document.getElementById("down-sec");
const upSec = document.getElementById("up-sec");

feature.forEach(function(f) {
    f.addEventListener("click", function() {
        f.nextElementSibling.classList.toggle("show");
        down.classList.toggle("hidden");
        up.classList.toggle("hidden");
    })
})
company.forEach(function(c) {
    c.addEventListener("click", function() {
        c.nextElementSibling.classList.toggle("show");
        downSec.classList.toggle("hidden");
        upSec.classList.toggle("hidden");
    })
})