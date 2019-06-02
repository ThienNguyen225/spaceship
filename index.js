let canvas = document.getElementById("gameCanvas");
let gameBoard = new GameBoard(canvas, 400, 500);
gameBoard.render();

 function onKeyDown(event) {
    gameBoard.action(event.which);
}