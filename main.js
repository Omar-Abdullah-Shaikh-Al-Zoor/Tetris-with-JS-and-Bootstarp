//main.js 
const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');
 
// Calculate size of canvas from constants.
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;
 
// Scale blocks
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);
let board = null;


function play() {
    board = new Board(ctx);
    console.table(board.grid);

    const { width, height } = ctx.canvas; 
    ctx.clearRect(0, 0, width, height);
    board.piece.draw();

    const moves = {
      [KEY.LEFT]:  p => ({ ...p, x: p.x - 1 }),
      [KEY.RIGHT]: p => ({ ...p, x: p.x + 1 }),
      [KEY.DOWN]:    p => ({ ...p, y: p.y + 1 })
    };

    const p = this.moves[event.key](this.piece);

    document.addEventListener('keydown', event => {
      if (moves[event.keyCode]) {  
        // Stop the event from bubbling.
        event.preventDefault();
        
        // Get new state of piece
        let p = moves[event.keyCode](board.piece);
        
        if (board.valid(p)) {    
          // If the move is valid, move the piece.
          board.piece.move(p);
          
          // Clear old position before drawing.
          ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
          
          board.piece.draw();
        }
      }
    });
    


  }