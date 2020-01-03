let player1 = {
    x: parseInt(board.length)-1,
    y: 0,
    keys: 0,
    unfrozen: false,
    won: false,
    targets: false,
    nextTarget: false,
    name: "player1"
};

let player2 = {
    x: 0,
    y: parseInt(board.length)-1,
    keys: 0,
    unfrozen: false,
    won: false,
    targets: false,
    nextTarget: false,
    name: "player2"
};
