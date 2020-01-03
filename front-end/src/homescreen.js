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
        resetPlayers(); resetGates();
        loadDraw();
        head2.setAttribute('class', 'auto'); 
        head2.innerText = "LOADING . . .";
        setTimeout(function(){gameLoaded = 1; head2.innerText = 'START'; head2.setAttribute('class', 'point');}, 3300)
    }
    else if (gameLoaded === 1) {
        gameLoaded = 2;
        gameStarted = 1;
        startCountdown();
        head2.setAttribute('class', 'auto');
    }
    else if (gameLoaded === 3) {
        gameLoaded = 2;
        gameStarted = 1;
        head2.setAttribute('class', 'point');
    }
}

const startCountdown = () => {
    let head2 = document.querySelector("body h2");
    head2.innerText = "3";
    draw();
    setTimeout(function (){head2.innerText = "2"}, 1000);
    setTimeout(function (){head2.innerText = "1"}, 2000);
    setTimeout(function (){head2.innerText = "1"}, 3000);
    setTimeout(function (){head2.innerText = "GO!"; player1.unfrozen = true; player2.unfrozen = true; loadTargets(); draw()}, 4000)
}

const loadPlayerData = () => {}

const loadTargets = () => {
    let targets = genPlayerTargets(5);
    player1.targets = targets[0];
    player2.targets = targets[1];
    genTarget(player1); genTarget(player2)
}

const optionToReset = () => {
    let head2 = document.querySelector("body h2");
    head2.innerText = "RESET";
    head2.setAttribute('class', 'point');
    gameStarted = 0;
    gameLoaded = 0;
}

const resetPlayers = () => {
    player1 = {
        x: parseInt(board.length)-1,
        y: 0,
        keys: 0,
        unfrozen: false,
        won: false,
        targets: false,
        nextTarget: false,
        name: "player1"
    };
    
    player2 = {
        x: 0,
        y: parseInt(board.length)-1,
        keys: 0,
        unfrozen: false,
        won: false,
        targets: false,
        nextTarget: false,
        name: "player2"
    };
}

const resetGates = () => {
    editCoordNum(14, 13, 25);
    editCoordNum(15, 16, 15); 
}

const showLeaderboardAndInfo = () => {
    leaderboard.style.visibility = 'visible';
    info.style.visibility = 'visible';
}