const usersURL = "http://localhost:3000/users";
let gameStarted = 0;
let gameLoaded = 0;

window.addEventListener('DOMContentLoaded', () => {
    
    loadPlayerData();
    addEventListeners();
    arrayOfBlankCoords();
})

const addEventListeners = () => {
    document.querySelector("body h2").addEventListener('click', startGame)
}

const startGame = () => {
    let head2 = document.querySelector("body h2");
    if (gameLoaded === 0) {
        canvas.style.visibility = 'visible';
        loadDraw();
        head2.innerText = "LOADING . . .";
        setTimeout(function(){gameLoaded = 1; head2.innerText = 'START'}, 3300)
    }
    else if (gameLoaded === 1) {
        gameStarted = 1;
        startCountdown()
    }
}

const startCountdown = () => {
    let head2 = document.querySelector("body h2");
    head2.innerText = "3";
    setTimeout(function (){head2.innerText = "2"}, 1000);
    setTimeout(function (){head2.innerText = "1"}, 2000);
    setTimeout(function (){head2.innerText = "1"}, 3000);
    setTimeout(function (){head2.innerText = "GO!"; player1.unfrozen = true; player2.unfrozen = true; draw()}, 4000)
}

const loadPlayerData = () => {}
