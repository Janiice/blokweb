// JavaScript Document

// Menu

var menuButton = document.querySelector("header a:nth-of-type(2)")
var menu = document.querySelector("header nav:nth-of-type(2)")

function menuOpen() {
    menu.classList.toggle("open")
}

menuButton.addEventListener("click", menuOpen)


//darkmode bron: https://lukelowrey.com/css-variable-theme-switcher/

var toggle = document.getElementById("theme-toggle");

var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme)


toggle.onclick = function () {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "light";

    if (currentTheme === "light") {
        targetTheme = "dark";
    }

    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
};

//sound effect menu openen

var menuButton = document.querySelector("header a:nth-of-type(2)")

var sound2 = new Audio('assets/soundeffect.mp3');

function playMusic() {
    sound2.play();
}

menuButton.addEventListener("click", playMusic)

