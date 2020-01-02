const usersURL = "http://localhost:3000/users";
let gameStarted = false;
let gameLoaded = false;

window.addEventListener('DOMContentLoaded', () => {
    
    loadPlayerData();
    addEventListeners();
    
})

const addEventListeners = () => {
    document.querySelector("body h2").addEventListener('click', startGame)
}

const startGame = () => {
    if (gameLoaded === false) {
        canvas.style.visibility = 'visible';
        loadDraw();
        document.querySelector('body h2').innerText = 'START';
        gameLoaded = true
    }
    else if (gameLoaded === true) {
        player1.unfrozen = true; player2.unfrozen = true; draw();
        gameStarted = true
    }
}

const loadPlayerData = () => {
}
