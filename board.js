//board.js
class Board { 
    constructor(ctx) {
      this.ctx = ctx;
      this.grid = this.getEmptyBoard();
      this.piece = new Piece(ctx)
    }

    animate() {
      this.piece.draw();
      requestAnimationFrame(this.animate.bind(this));
    }    
   
    getEmptyBoard() {
      return Array.from(
        {length: ROWS}, () => Array(COLS).fill(0)
      );
    }

  
    insideBorders(x,y){
      return x >= 0 && x < COLS && y <= ROWS;
    }
    
    rotate(piece){
      // Clone with JSON for immutability
      let p = JSON.parse(JSON.stringify(piece));
      
      // Do algorithm
      // Transpose matrix, p is the Piece.
      for (let y = 0; y < p.shape.length; ++y) {
        for (let x = 0; x < y; ++x) {
          [p.shape[x][y], p.shape[y][x]] = 
          [p.shape[y][x], p.shape[x][y]];
        }
      }

      // Reverse the order of the columns.
      p.shape.forEach(row => row.reverse());
      
      return p;
    }


    valid(p) {
      return p.shape.every((row, dy) => {
        return row.every((value, dx) => {
          let x = p.x + dx;
          let y = p.y + dy;
          return (
          this.insideBorders(x,y)
          );
          });
      });
    }
  }     