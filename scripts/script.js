// JavaScript Document

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
        toggle.src = "images/lightmode.png";  //hier wordt de zon image gepakt
    }

    else { 
        toggle.src = "images/darkmode.png";   //hier wordt de maan image gepakt
    }

    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
};


// Menu

var menuButton = document.querySelector("header a:nth-of-type(2)")
var menu = document.querySelector("header nav:nth-of-type(2)")

//sound effect menu openen

var sound2 = new Audio('assets/soundeffect.mp3');

function menuOpen() {
    menu.classList.toggle("open")
    sound2.play();
}

menuButton.addEventListener("click", menuOpen)


//loading screen


var loading = document.querySelector(".loading")

window.addEventListener('load', function(){



  setTimeout(function(){

       loading.classList.add("remove-loading");

    }, 1100);

    //aantal miliseconde dat er gewacht wordt om de opdracht (de loading screen) te voeren
  
})