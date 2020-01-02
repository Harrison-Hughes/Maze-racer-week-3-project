const canvas = document.querySelector('#GameBoardCanvas')

function canMove(player, x, y){
    if (gameStarted === true && (y>=0) && (y<board.length) && (x >= 0) && (x < board[y].length) && (board[y][x] === 0 || board[y][x] === -1 ) && player.unfrozen){
        if (player === player1) {
            return true
        }
        else if (player === player2) {
            return true
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
}, 50);