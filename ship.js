function Ship(x, gameBoard) {
    let self = this;
    self.x = x;
    self.y = gameBoard.height - 30;
    self.gameBoard = gameBoard;

    self.moveLeft = function () {
        if (self.x - 10 < 0){
            return;
        }
        self.x -= 10;
    };

    self.moveRight = function () {
        if (self.x + 10 > self.gameBoard.width - 5){
            return;
        }
        self.x += 10;
    };

    self.render = function () {
        let context = self.gameBoard.canvas.getContext("2d");
        context.fillStyle = "red";
        context.fillRect(self.x, self.y, 5, 30);
    };

    self.shoot = function () {
        let bullet = new Bullet(self.x + 2.5, self.y, self.gameBoard);
        self.gameBoard.addBullet(bullet);
        bullet.move();
    }
}