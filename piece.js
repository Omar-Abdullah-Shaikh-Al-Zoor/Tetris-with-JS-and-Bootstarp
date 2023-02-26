class Piece{

    constructor(ctx) {
        this.ctx = ctx;
        this.color = this.pieceColor();
        this.shape = this.pieceShape();
        this.x = 3;
        this.y = 0;

      }


    pieceShape(){
        let piece = Math.floor(Math.random() * PIECES.length);
        return PIECES[piece]
            
        }


    pieceColor(){
        let colorIndex = Math.floor(Math.random() * COLORS.length);
        return COLORS[colorIndex];

    }
    draw() {
        this.ctx.fillStyle = this.color;
        this.shape.forEach((row, y) => {
          row.forEach((value, x) => {
            // this.x, this.y gives the left upper position of the shape
            // x, y gives the position of the block in the shape
            // this.x + x is then the position of the block on the board
            if (value == 1) {
              this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
            }
          });
        });
      }

      move(p) {
        this.x = p.x;
        this.y = p.y;
      }
}