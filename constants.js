//constants.js
const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30;

const PIECES = [[[0,0,0],[1,1,1],[0,0,0]], [[1,0,0],[1,1,1],[0,0,0]], [[0,0,1],[1,1,1],[0,0,0]], 
[[0,1,1],[0,1,1],[0,0,0]], [[0,1,1],[1,1,0],[0,0,0]], [[0,1,0],[1,1,1],[0,0,0]], [[1,1,0],[0,1,1],[0,0,0]]];

const COLORS =  ['blue', 'red', 'yellow', 'green', 'orange', 'cyan', 'purple']

const KEY = {
    LEFT: 37,
    RIGHT: 39,
    DOWN: 40
}
Object.freeze(KEY);

