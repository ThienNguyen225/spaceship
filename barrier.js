function Barrier(x, y, gameBoard) {
    let self = this;
    self.x = x;
    self.y = y;
    self.gameBoard = gameBoard;

    self.move = function () {
        self.interval = setInterval(function () {
            self.y += 10;
            self.gameBoard.render();
        }, 200);

    };

    self.destroy = function () {
        clearInterval(self.interval);
    };


    self.render = function () {
        let context = self.gameBoard.canvas.getContext("2d");
        context.beginPath();
        context.arc(self.x, self.y, 8, 0, 2 * Math.PI);
        context.fillStyle = "blue";
        context.fill();
    };

}