const player1 = {
    x: parseInt(board.length)-1,
    y: 0,
    keys: 0,
    unfrozen: false,
    won: false,
    targets: false,
    nextTarget: false,
};

const player2 = {
    x: 0,
    y: parseInt(board.length)-1,
    keys: 0,
    unfrozen: false,
    won: false,
    targets: false,
    nextTarget: false,
};
