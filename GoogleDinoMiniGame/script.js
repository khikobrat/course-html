const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const scoreDisplay = document.getElementById('score');

let score = 0;

setInterval(function() {
    score++;
    scoreDisplay.textContent = score;
  }, 100);

document.addEventListener("keydown", function(event) {
    jump();
});

function jump () {
    if (dino.classList != "jump") {
        dino.classList.add("jump")
    }
    setTimeout (function() {
        dino.classList.remove("jump")
    }, 300)
};

let isAlive = setInterval (function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

    if (cactusLeft < 200 && cactusLeft > 150 && dinoTop >= 140) {
        alert("YOU DIED")
    }
}, 10);