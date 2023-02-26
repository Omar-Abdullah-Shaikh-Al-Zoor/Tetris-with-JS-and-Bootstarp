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

const moves = {
    [KEY.LEFT]:  p => ({ ...p, x: p.x - 1 }),
    [KEY.RIGHT]: p => ({ ...p, x: p.x + 1 }),
    [KEY.DOWN]:    p => ({ ...p, y: p.y + 1 })
  };