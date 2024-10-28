let newhit = Math.floor(Math.random() * 10);
let score = 0;

function createBubble() {
    let clutter = "";
    for (let i = 1; i <= 126; i++) {
        const rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector(".game-bottom").innerHTML = clutter;
}

function settimer() {
    let timer = 60;
    const timerDisplay = document.querySelector(".settimer");
    const timerfunc = setInterval(function () {
        if (timer > 0) {
            timer--;
            timerDisplay.textContent = timer;
        } else {
            clearInterval(timerfunc);
            alert("Time's up! Your score: " + score);
            resetGame();
        }
    }, 1000);
}

function setScore() {
    score += 10;
    document.querySelector(".Score").textContent = score;
}

function getNewHit() {
    newhit = Math.floor(Math.random() * 10);
    document.querySelector(".hitval").textContent = newhit;
}

function resetGame() {
    score = 0;
    document.querySelector(".Score").textContent = score;
    createBubble();
    getNewHit();
    settimer();
}

document.querySelector('.game-bottom').addEventListener('click', function(det) {
    const val = parseInt(det.target.textContent, 10);
    if (val === newhit) {
        setScore();
        getNewHit();
    }
});

createBubble();
settimer();
getNewHit();
