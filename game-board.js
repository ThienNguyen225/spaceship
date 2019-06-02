function GameBoard(canvas, width, height) {
    let self = this;
    self.canvas = canvas;
    self.width = width;
    self.height = height;
    self.ship = new Ship(self.width / 2, self);
    self.bullets = [];
    self.bariers = [];

    self.render = function () {
        let context = self.canvas.getContext("2d");
        context.beginPath();
        context.clearRect(0,0, self.width, self.height);
        self.ship.render();
        for (let i = 0; i < self.bullets.length; i++){
            self.bullets[i].render();
        }
        for (let i = 0; i < self.bariers.length; i++){
            self.bariers[i].render();

        }
        // self.bullets.forEach(function (bullet) {
        //     bullet.render();
        // });
    };

    self.action = function (keyCode) {
        switch (keyCode) {
            case 39:
                self.ship.moveRight();
                break;
            case 37:
                self.ship.moveLeft();
                break;
            case 32:
                self.ship.shoot();
                break;
        }
        self.render();
    };

    self.addBullet = function (bullet) {
        self.bullets.push(bullet);
        console.log(self.bullets);

    };

    self.removeBullet = function (bullet) {
        let index = self.bullets.indexOf(bullet);
        self.bullets.splice(index, 1);
        // let index = self.bullets.indexOf(bullet);
        // for(let i = 0; i < self.bullets.length; i++){
        //     if(self.bullets[i] === bullet){
        //         index = i;
        //         break;
        //     }
        // }
        // if (index !== -1){
        //     self.bullets.splice(index, 1);
        // }
    };
    self.fallingObstacles = function () {
        let barrier = new Barrier(Math.random()* 400, 0, self);
        self.bariers.push(barrier);
        barrier.move();
        console.log(barrier);
    };
    self.generateObstacles = function () {
        self.fallingObstacles();
        let interval = Math.random()*1000 + 800;
        setTimeout(self.generateObstacles, interval);

    };
    self.generateObstacles();

}
