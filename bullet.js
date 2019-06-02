function Bullet(x, y, gameBoard) {
    let self = this;
    self.x = x;
    self.y = y;
    self.gameBoard = gameBoard;
    self.interval = undefined;

    self.move = function () {
         self.interval = setInterval(function () {
            if (self.y <= 0){
                self.destroy();
            }
            self.y -= 20;
            self.gameBoard.render();
        },100);
    };
    // self.bulletMovement = function () {
    //     if (self.y <= 0) {
    //         self.destroy();
    //         console.log("aaaaaa");
    //     }
    //     else {
    //         self.y -= 20;
    //         self.gameBoard.render();
    //     }
    // };
    // self.move = function () {
    //     self.interval = self.bulletMovement();
    //     requestAnimationFrame(self.bulletMovement);
    // };

    self.destroy = function () {
        clearInterval(self.interval);
        self.gameBoard.removeBullet();
    };

    self.render = function () {
        let context = self.gameBoard.canvas.getContext("2d");
        context.beginPath();
        context.arc(self.x, self.y, 5, 0, 2 * Math.PI);
        context.fillStyle = 'green';
        context.fill();
    }
}