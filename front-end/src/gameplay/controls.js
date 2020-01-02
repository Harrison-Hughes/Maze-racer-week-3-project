const canvas = document.querySelector('#GameBoardCanvas')

const gate1coords = [15, 16];
const gate2coords = [14, 13];

function canMove(player, x, y){
    let gate1 = board[gate1coords[0]][gate1coords[1]];
    let gate2 = board[gate2coords[0]][gate2coords[1]];
    // console.log(`${x}, ${y}, ${player}, ${gate1}`);
    if (gameStarted === true && (y>=0) && (y<board.length) && (x >= 0) && (x < board[y].length) && 
    (board[y][x] === 0 || board[y][x] === -1 ||board[y][x] === 2 ) && player.unfrozen){
        if (player === player1) {
            if (x === gate2coords[0] && y === gate2coords[1]) {return false}
            else if (gate1 > 10 && x === gate1coords[0] && y === gate1coords[1]){return false}
            else {return true}
        }
        else if (player === player2) {
            if (x === gate1coords[0] && y === gate1coords[1]) {return false}
            else if (gate2 > 20 && x === gate2coords[0] && y === gate2coords[1]){return false}
            else {return true}
        }
        else {return false}
    }
    else {return false}
}

function KeyboardController(keys, repeat) {
    let timers= {};

    document.onkeydown= function(event) {
        let key= (event || window.event).keyCode;
        if (!(key in keys))
            return true;
        if (!(key in timers)) {
            timers[key]= null;
            keys[key]();
            if (repeat!==0)
                timers[key]= setInterval(keys[key], repeat);
        }
        return false;
    };

    document.onkeyup= function(event) {
        let key= (event || window.event).keyCode;
        if (key in timers) {
            if (timers[key]!==null)
                clearInterval(timers[key]);
            delete timers[key];
        }
    };

    window.onblur= function() {
        for (key in timers)
            if (timers[key]!==null)
                clearInterval(timers[key]);
        timers= {};
    };
};

KeyboardController({
    73: function() { if (canMove(player1, player1.x, player1.y-1)) {player1.y--; draw()} },
    74: function() { if (canMove(player1, player1.x-1, player1.y)) {player1.x--; draw()} },
    75: function() { if (canMove(player1, player1.x, player1.y+1)) {player1.y++; draw()} },
    76: function() { if (canMove(player1, player1.x+1, player1.y)) {player1.x++; draw()} },
    87: function() { if (canMove(player2, player2.x, player2.y-1)) {player2.y--; draw()} },
    65: function() { if (canMove(player2, player2.x-1, player2.y)) {player2.x--; draw()} },
    83: function() { if (canMove(player2, player2.x, player2.y+1)) {player2.y++; draw()} },
    68: function() { if (canMove(player2, player2.x+1, player2.y)) {player2.x++; draw()} },
}, 20);


const addPlayerKey = (player) => {
    if (player === player1) {
        if (board[gate1coords[0]][gate1coords[1]] > 11) {board[gate1coords[0]][gate1coords[1]] -= 1}
        else if (board[gate1coords[0]][gate1coords[1]] === 11) {board[gate1coords[0]][gate1coords[1]] = 0}
        return board[gate1coords[0]][gate1coords[1]]
    }
    else if (player === player2) {
        if (board[gate2coords[0]][gate2coords[1]] > 21) {board[gate2coords[0]][gate2coords[1]] -= 1}
        else if (board[gate2coords[0]][gate2coords[1]] === 21) {board[gate2coords[0]][gate2coords[1]] = 0}
        return board[gate2coords[0]][gate2coords[1]]}
    draw(); makeSound(ding);
}

const makeSound = (sound) => {
    const audio = document.querySelector(`audio[data-key="${sound}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
}
