const canvas = document.querySelector('#GameBoardCanvas')

function canMove(x, y){
    return (y>=0) && (y<board.length) && (x >= 0) && (x < board[y].length) && (board[y][x] != 1);
}

window.addEventListener('keydown', enterDirection)

function enterDirection(e) {

    // PLAYER 1 CONTROLS
    if((e.which == 73) && canMove(player1.x, player1.y-1))//up - i
        player1.y--;
    else if((e.which == 75) && canMove(player1.x, player1.y+1)) // down - k
        player1.y++;
    else if((e.which == 74) && canMove(player1.x-1, player1.y)) // right - l
        player1.x--;
    else if((e.which == 76) && canMove(player1.x+1, player1.y)) // left - j
        player1.x++;

    // PLAYER 2 CONTROLS
    else if((e.which == 87) && canMove(player2.x, player2.y-1)) // up - w
        player2.y--;
    else if((e.which == 83) && canMove(player2.x, player2.y+1)) // down - s
        player2.y++;
    else if((e.which == 65) && canMove(player2.x-1, player2.y)) // right - d
        player2.x--;
    else if((e.which == 68) && canMove(player2.x+1, player2.y)) // left - a
        player2.x++;
    draw();
    e.preventDefault();
}
