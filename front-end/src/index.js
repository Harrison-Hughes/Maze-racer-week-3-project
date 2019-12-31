document.addEventListener('DOMContentLoaded', function(){
    allPlayers();
})

 

const usersURL = "http://localhost:3000/users"

const canvas = document.querySelector('#GameBoardCanvas')

let board = [
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [ 1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [ 0, 0, 0, 0, 1, 1, 1, 0, 1, 0],
    [ 0, 1, 1, 0, 0, 0, 1, 0, 1, 0],
    [ 0, 0, 1, 1, 1, 1, 1, 0, 1, 0],
    [ 1, 0, 1, 0, 0, 0, 1, 0, 1, 0],
    [ 1, 0, 1, 0, 1, 0, 1, 0, 0, 0],
    [ 1, 0, 1, 0, 1, 0, 0, 1, 1, 0],
    [-1, 0, 1, 0, 1, 1, 0, 0, 0, 0]
];

let player = {
    x: 0,
    y: 0
};

let width = canvas.width;
let blockSize = width/board.length;
let ctx = canvas.getContext('2d');
ctx.setTransform(1, 0, 0, 1, 0, 0);
ctx.clearRect(0, 0, width, width);
ctx.fillStyle="white";
for(var y = 0; y < board.length; y++){
    for(var x = 0; x < board[y].length; x++){
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
};



const select = document.querySelector('select')
const select1 = document.querySelector('#select1')
const menus = [select,select1]
const menusBlock = document.querySelector('#dropdowns')

function allPlayers() {
    fetch(usersURL)
    .then(resp => resp.json()) 
    .then(data => eachPlayerGenerator(data, menus));
};

function eachPlayerGenerator(player, menus){
    menus.forEach(dropdown => {
        player.forEach( player => dropDownMenu(player,dropdown))
    })
};

function dropDownMenu(player, dropdown) {
    const option = document.createElement('option')
    option.innerText = player.name
    dropdown.append(option)
    dropdowns.addEventListener("change", (e) => playerSelected(player.name))
};

function playerSelected(player){
    
}


// .then(() => changeLikeCounter())

    // console.log(e.target.selectedIndex,e.target.parentNode.name)


