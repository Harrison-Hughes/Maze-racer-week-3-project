function loadDraw() {
    let width = canvas.width; let blockSize = width/board.length; let ctx = canvas.getContext('2d');

    ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, width, width);

    for(let y = 0; y < board.length; y++){
        for(let x = 0; x < board[y].length; x++){

            //Draw a wall
            if(board[y][x] === 1){
                ctx.fillStyle="grey";
                ctx.fillRect(x*blockSize, y*blockSize, blockSize, blockSize);
            }
            //Draw the goals
            else if(board[y][x] === -1){
                ctx.beginPath();
                ctx.lineWidth = 1;
                ctx.strokeStyle = "gold";
                ctx.moveTo(x*blockSize, y*blockSize);
                ctx.lineTo((x+1)*blockSize, (y+1)*blockSize);
                ctx.moveTo(x*blockSize, (y+1)*blockSize);
                ctx.lineTo((x+1)*blockSize, y*blockSize);
                ctx.stroke();
            }

            //Draw the start squares
            else if(board[y][x] === 2){
                ctx.fillStyle="#46f700";
                ctx.fillRect(x*blockSize, y*blockSize, blockSize, blockSize);
            }

            //Draw the gate squares
            else if(board[y][x] >= 10 && board[y][x] < 20){
                ctx.fillStyle="rgb(255, 0, 0)"; ctx.fillRect(x*blockSize, y*blockSize, blockSize, blockSize);
                let hitsRemaining = board[y][x]%10
                ctx.fillStyle="#ddd"; ctx.font = "13px Arial"; ctx.fillText(`${hitsRemaining}`, (x+1/4)*blockSize-1, (y+1)*blockSize-1)
            }
            
            else if(board[y][x] >= 20 && board[y][x] < 30){
                ctx.fillStyle="yellow"; ctx.fillRect(x*blockSize, y*blockSize, blockSize, blockSize);
                let hitsRemaining = board[y][x]%10
                ctx.fillStyle="black"; ctx.font = "13px Arial"; ctx.fillText(`${hitsRemaining}`, (x+1/4)*blockSize-1, (y+1)*blockSize-1)
            }
        }
    }
}


function draw() {

    let width = canvas.width; let blockSize = width/board.length; let ctx = canvas.getContext('2d');

    ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, width, width);

    // draw board
    for(let y = 0; y < board.length; y++){
        for(let x = 0; x < board[y].length; x++){

            //Draw a wall
            if(board[y][x] === 1){
                ctx.fillStyle="grey";
                ctx.fillRect(x*blockSize, y*blockSize, blockSize, blockSize);
            }
            //Draw the goals
            else if(board[y][x] === -1){
                ctx.beginPath();
                ctx.lineWidth = 1;
                ctx.strokeStyle = "gold";
                ctx.moveTo(x*blockSize, y*blockSize);
                ctx.lineTo((x+1)*blockSize, (y+1)*blockSize);
                ctx.moveTo(x*blockSize, (y+1)*blockSize);
                ctx.lineTo((x+1)*blockSize, y*blockSize);
                ctx.stroke();
            }

            //Draw the start squares
            else if(board[y][x] === 2){
                ctx.fillStyle="#46f700";
                ctx.fillRect(x*blockSize, y*blockSize, blockSize, blockSize);
            }

            //Draw the gate squares
            else if(board[y][x] >= 10 && board[y][x] < 20){
                ctx.fillStyle="rgb(255, 0, 0)"; ctx.fillRect(x*blockSize, y*blockSize, blockSize, blockSize);
                let hitsRemaining = board[y][x]%10
                ctx.fillStyle="#ddd"; ctx.font = "13px Arial"; ctx.fillText(`${hitsRemaining}`, (x+1/4)*blockSize-1, (y+1)*blockSize-1)
            }
            
            else if(board[y][x] >= 20 && board[y][x] < 30){
                ctx.fillStyle="yellow"; ctx.fillRect(x*blockSize, y*blockSize, blockSize, blockSize);
                let hitsRemaining = board[y][x]%10
                ctx.fillStyle="black"; ctx.font = "13px Arial"; ctx.fillText(`${hitsRemaining}`, (x+1/4)*blockSize-1, (y+1)*blockSize-1)
            }}
    }

    //Draw the players
    let half = blockSize/2;

    if (player1.x === player2.x && player1.y === player2.y) {
        // player overlap
        ctx.beginPath(); ctx.fillStyle = "yellow"; ctx.arc(player1.x*blockSize+half, player1.y*blockSize+half, half, 1/2*Math.PI, 3/2*Math.PI); ctx.fill();
        ctx.beginPath(); ctx.fillStyle = "red"; ctx.arc(player1.x*blockSize+half, player1.y*blockSize+half, half, 3/2*Math.PI, 1/2*Math.PI); ctx.fill();
    }

    else {
        // player 1
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.arc(player1.x*blockSize+half, player1.y*blockSize+half, half, 0, 2*Math.PI);
        ctx.fill();
        // player 2
        ctx.beginPath();
        ctx.fillStyle = "yellow";
        ctx.arc(player2.x*blockSize+half, player2.y*blockSize+half, half, 0, 2*Math.PI);
        ctx.fill();
    }
}