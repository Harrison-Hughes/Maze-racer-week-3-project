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
        gameLoaded = 2;
        gameStarted = 1;
        startCountdown()
    }
}

const startCountdown = () => {
    let head2 = document.querySelector("body h2");
    head2.innerText = "3";
    setTimeout(function (){head2.innerText = "2"}, 100);
    setTimeout(function (){head2.innerText = "1"}, 200);
    setTimeout(function (){head2.innerText = "1"}, 300);
    setTimeout(function (){head2.innerText = "GO!"; player1.unfrozen = true; player2.unfrozen = true; loadTargets(); draw()}, 400)
}

const loadPlayerData = () => {}

const loadTargets = () => {
    let targets = genPlayerTargets(5);
    player1.targets = targets[0];
    player2.targets = targets[1];
    genTarget(player1); genTarget(player2)
}
