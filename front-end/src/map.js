let board = [
    [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [ 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0],
    [ 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
    [ 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
    [ 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
    [ 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0],
    [ 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
    [ 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0],
    [ 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
    [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const top_right_grid = [
        [0, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 0]
    ]
    
    const top_left_grid = [
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [0, 1, 1, 1],
        [0, 0, 0, 0]
    ]

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

const gridMerger = (topLeft, topRight) => {
    
    const topLeftClone = topLeft.slice();
    const topRightClone = topRight.slice();
    
    let topQuads = sidewaysMerge(topLeftClone, topRightClone);
    let bottomQuads = topQuads.slice();
    bottomQuads.reverse().map(row => {row.reverse()});
    debugger
}

console.table(gridMerger(top_left_grid, top_right_grid))
