
const params = new URLSearchParams(window.location.search);

var username=params.get('username'); 
var Full_name=params.get('full-name');



let canvas;
let ctx;
let GameBoard_arr_height = 20;
let GameBoard_arr_width = 12;
let StartX = 4;
let StartY= 0;
let coordinate_arr = [...Array(GameBoard_arr_height)].map(e => Array(GameBoard_arr_width).fill(0));
let current_piece = [[1,0], [0,1], [1,1], [2,1]];

let pieces = [];
let Pieces_Color = ['blue', 'lightblue', 'red', 'yellow', 'green', 'orange', 'cyan', 'purple'];
let curr_Pieces_Color;

let GameBoard_arr = [...Array(GameBoard_arr_height)].map(e => Array(GameBoard_arr_width).fill(0));

let Direction = {
    Idle:0,
    Down: 1,
    Left: 2,
    Right: 3
};

let direction;

class Coordinates {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

}

document.addEventListener("DOMContentLoaded", SetupCanvas);

function SetupCanvas(){
    canvas = document.getElementById("game-canvas");
    ctx = canvas.getContext("2d");
    canvas.width = 936;
    canvas.height = 956;
    ctx.scale(2,2);
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "black";
    ctx.strokeRect(8, 8, 280, 462);
    document.addEventListener("keydown", OnkeyPress);
    Create_Pieces();
    Create_Piece();

    CreateCoordArr();
    DrawPiece()
};


function OnkeyPress(key){
    if (key.keyCode === 65) {
        direction = Direction.Left;
        if (!Hit_Wall()) {
            DeletePiece();
            StartX--;
            DrawPiece();
        }
    }
    else if (key.keyCode === 68) {
        direction = Direction.Right;
        if (!Hit_Wall()) {
            DeletePiece();
            StartX++;
            DrawPiece();
        }
    }

    else if (key.keyCode === 83) {
        direction = Direction.Down;
        DeletePiece();
        StartY++;
        DrawPiece();
    }
};

function CreateCoordArr() {
    let i=0, j=0;
    for (let y = 9; y <= 446 ; y+=23) {
        for (let x = 11; x <= 264; x+=23) {
            coordinate_arr[i][j] = new Coordinates(x, y);
            i++;
        }
        j++;
        i = 0;
    }
}

function DrawPiece() {
    for(let i=0; i < current_piece.length; i++) { 
        let x =current_piece[i][0] + StartX;
        let y =current_piece[i][1] + StartY;
        GameBoard_arr[x][y] = 1;
        let CoordX = coordinate_arr[x][y].x;
        let CoordY = coordinate_arr[x][y].y;
        ctx.fillStyle = curr_Pieces_Color;
        ctx.fillRect(CoordX, CoordY, 21, 21);
    }
}


function DeletePiece() {
    for(let i=0; i< current_piece.length; i++) {
        let x = current_piece[i][0] + StartX;
        let y = current_piece[i][1] + StartY;
        GameBoard_arr[x][y] = 0;
        let CoordX = coordinate_arr[x][y].x;
        let CoordY = coordinate_arr[x][y].y;
        ctx.fillStyle = 'white';
        ctx.fillRect(CoordX, CoordY, 21, 21);
    }
}



function Create_Pieces() {
    pieces.push([[1,0], [0,1], [1,1], [2,1]]); 
    pieces.push([[0,0], [1,0], [2,0], [3,0]]); 
    pieces.push([[0,0], [0,1], [1,0], [1,1]]); 
    pieces.push([[0,0], [1,0], [1,1], [2,1]]); 
    pieces.push([[1,0], [2,0], [0,1], [1,1]]); 
    pieces.push([[1,0], [2,0], [2,1], [3,1]]); 
    pieces.push([[0,0], [1,0], [1,1], [1,2]]); 
    
}

function Create_Piece() {
    let random = Math.floor(Math.random() * pieces.length);
    current_piece = pieces[random];
    curr_Pieces_Color = Pieces_Color[random];
}

function Hit_Wall() {
    for(let i=0; i< current_piece.length; i++) {
        let newX = current_piece[i][0] + StartX;
        if(newX <= 0 && direction === Direction.Left)
        {
            return true;
        }
        else if(newX >= GameBoard_arr_width - 1 && direction === Direction.Right)
         {
            return true;
         }
    }
    return false;
}
