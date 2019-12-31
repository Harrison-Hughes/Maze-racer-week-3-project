const usersURL = "http://localhost:3000/users"

const canvas = document.querySelector('#GameBoardCanvas')

let player1 = {
    x: 14,
    y: 0
};

function draw() {
    let width = canvas.width;
    let blockSize = width/board.length;
    let ctx = canvas.getContext('2d');
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, width, width);
    ctx.fillStyle="white";
    for(let y = 0; y < board.length; y++){
    for(let x = 0; x < board[y].length; x++){
        //Draw a wall
        if(board[y][x] === 1){
            ctx.fillRect(x*blockSize, y*blockSize, blockSize, blockSize);
        }
        //Draw the goal
        else if(board[y][x] === -1){
            ctx.beginPath();
            ctx.lineWidth = 5;
            ctx.strokeStyle = "gold";
            ctx.moveTo(x*blockSize, y*blockSize);
            ctx.lineTo((x+1)*blockSize, (y+1)*blockSize);
            ctx.moveTo(x*blockSize, (y+1)*blockSize);
            ctx.lineTo((x+1)*blockSize, y*blockSize);
            ctx.stroke();
        }
    }
}
ctx.beginPath();
    let half = blockSize/2;
    ctx.fillStyle = "red";
    ctx.arc(player1.x*blockSize+half, player1.y*blockSize+half, half, 0, 2*Math.PI);
    ctx.fill();

}

function canMove(x, y){
    return (y>=0) && (y<board.length) && (x >= 0) && (x < board[y].length) && (board[y][x] != 1);
}

window.addEventListener('keydown', enterDirection)

function enterDirection(e) {
    if((e.which == 38) && canMove(player1.x, player1.y-1))//Up arrow
        player1.y--;
    else if((e.which == 40) && canMove(player1.x, player1.y+1)) // down arrow
        player1.y++;
    else if((e.which == 37) && canMove(player1.x-1, player1.y)) // right arrow
        player1.x--;
    else if((e.which == 39) && canMove(player1.x+1, player1.y)) // left arrow
        player1.x++;
    draw();
    e.preventDefault();
}

draw();