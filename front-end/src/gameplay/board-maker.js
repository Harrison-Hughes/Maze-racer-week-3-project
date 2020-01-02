const sidewaysMerge = (left, right) => {
    let output = left.slice();
    for (let i = 0; i < left.length; i++) {
        for (let j = 0; j < left.length; j++) {
        output[i].push(right[i][j])
    }};
    return output
};

const verticalMerge = (top, bottom) => {
    let output = top.slice();
    for (let i = 0; i < bottom.length; i++) {
        output.push(bottom[i])
    };
    return output
};

const deepClone = array => array.map(element => {
    if (Array.isArray(element)) return deepClone(element)
    return element
})

const gridMerger = (topLeft, topRight) => {
    
    // MERGE TOP LEFT AND RIGHT QUADS
    const topLeftClone = deepClone(topLeft);
    const topRightClone = deepClone(topRight);
    let topQuads = sidewaysMerge(topLeftClone, topRightClone);

    // ROTATE TOP HALF 180º AND MERGE BELOW
    let bottomQuads = deepClone(topQuads);
    bottomQuads = bottomQuads.reverse().map(row => row.reverse());
    
    return verticalMerge(topQuads, bottomQuads)
}

let board = gridMerger(board1a, board1b);

const editCoordNum = (x, y, newnum) => {
    board[x][y] = newnum;
}

editCoordNum(14, 13, 25);

const arrayOfBlankCoords = () => {
    let arr = [];
    // console.log(board);
    for(let y = 0; y < board.length; y++){
        for(let x = 0; x < board[y].length; x++){
            let pairArr = [x, y];
            if (board[y][x] === 0) {arr.push(pairArr)};
            
        }
    }
    // console.log(arr);
    return arr
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const noBlnkCrds = (num) => {
    let arr = arrayOfBlankCoords();
    let newArr = []
    for(let i = 0; i < num; i++){
        let int = getRandomInt(0, arr.length);
        newArr.push(arr[int])
    }
    console.log(newArr)
    return newArr
}

const symmetricalPoints = arr => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        let newCoords = [0, 0];
        newCoords[0] = board.length - 1 - arr[i][0]; newCoords[1] = board.length - 1 - arr[i][1]; 
        newArr.push(newCoords)
    }
    console.log(newArr)
    return newArr
} 

const genPlayerTargets = () => {
    
}