function Canvas() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");

    this.width = 410;
    this.height = 600;
    this.x = 0;
    this.y = 0;

    this.fps = 60;
    this.counter = 0;
    this.newMoveset = [];

    this.background = new Background(this);
    this.arrow = new Arrow(this);
    this.movingArrow = new Moving(this);

    this.text = new Text(this);
    this.countDown = 200;
    this.startCount = 0
}
Canvas.prototype.drawStatic = function () {
    this.background.firstBc()
    this.arrow.draw();
}
Canvas.prototype.drawMoving = function () {
    this.movingArrow.draw();
    this.move();
}
Canvas.prototype.move = function () {
    //this.movingArrow.clear();
    this.background.move();
    this.movingArrow.move();
}
Canvas.prototype.setBc = function (link) {
    this.background.bc1.src = link;
}
Canvas.prototype.startCanvas = function () {
    setInterval(function () {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.drawStatic();
        this.drawMoving();
        this.counter++;
        if (this.counter >= 180) {
            this.setBc("./Imagenes/b3");
        }
        if (this.counter >= 360) {
            this.counter = 0;
            this.setBc("./Imagenes/b1_opt.jpg");
        }


    }.bind(this), 1000 / this.fps);
}
Canvas.prototype.startingGame = function () {
    var intervalID = setInterval(function () {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.drawStatic();
        this.text.countDown();
        this.startCount++
        if (this.startCount % 60 === 0) {
            this.text.text = "STEADY"
        }
        if (this.startCount % 120 === 0) {
            this.text.text = "DANCE"
        }
        if (this.startCount % 150 === 0) {
            clearInterval(intervalID)
            this.startCanvas();
        }

    }.bind(this), 1000 / this.fps);
}