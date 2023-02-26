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

  
    insideBorders(x,y){
      return x >= 0 && x < COLS && y <= ROWS;
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