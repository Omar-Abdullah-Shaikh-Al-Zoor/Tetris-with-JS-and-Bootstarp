//board.js
class Board { 
    constructor(ctx) {
      this.ctx = ctx;
      this.grid = this.getEmptyBoard();
      this.piece = new Piece(ctx)
    }
   
    getEmptyBoard() {
      return Array.from(
        {length: ROWS}, () => Array(COLS).fill(0)
      );
    }

    
    insideWalls(x) {
      return x >= 0 && x < COLS;
    }

    aboveFloor(y) {
      return y <= ROWS;
    }

    valid(p) {
      return p.shape.every((row, dy) => {
        return row.every((value, dx) => {
          let x = p.x + dx;
          let y = p.y + dy;
          return (
            // this.isEmpty(value) ||
           (this.insideWalls(x) &&
            this.aboveFloor(y)
          ));
          });
      });
    }
  }     