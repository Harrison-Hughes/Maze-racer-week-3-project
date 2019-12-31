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

const board = gridMerger(board1a, board1b)