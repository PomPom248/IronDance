function Moving(canvas) {
    this.canvas = canvas;

    this.wArrows = 80;
    this.hArrows = 80;
    this.xArrows = 10;
    this.yArrows = 540;

    this.counter = 0;
    this.counterDraw = 0
    this.width = 410;
    this.height = 550;

    this.dy = 9.5;

    this.imgLeft = new Image();
    this.imgLeft.src = "Imagenes/arrow-left"

    this.imgRight = new Image();
    this.imgRight.src = "Imagenes/arrow-right"

    this.imgUp = new Image();
    this.imgUp.src = "Imagenes/arrow-up"

    this.imgDown = new Image();
    this.imgDown.src = "Imagenes/arrow-down"

    this.score = 0;
    this.randomMove()
    this.setListeners();
}

Moving.prototype.draw = function () {
    if (this.counterDraw > 60) {
        this.randomMove()
        this.counterDraw = 0
    }
    this.counterDraw++
    this.canvas.ctx.drawImage(randomArrow, this.xArrows, this.yArrows, this.wArrows, this.hArrows);
    this.counter++;

    if (randomMoves !== undefined) {
        this.canvas.ctx.drawImage(randomMoves, this.xDouble, this.yArrows, this.wArrows, this.hArrows)
        if (randomMoves == this.imgRight) {
            this.xDouble = 320;
        }
        if (randomMoves == this.imgUp) {
            this.xDouble = 120;
        }
        if (randomMoves == this.imgDown) {
            this.xDouble = 220;
        }
        if (randomMoves == this.imgLeft) {
            this.xDouble = 10;
        }
        if (this.counter % 420 == 0) {
            randomMoves = undefined
            this.counter = 0;
        }
    }

}

Moving.prototype.clear = function () {
    this.canvas.ctx.clearRect(0, 0, this.width, this.height);
}

Moving.prototype.move = function () {
    this.yArrows -= this.dy;
}
var randomMoves

Moving.prototype.randomMove = function () {
    this.yArrows = 550;
    newMoveset = [this.imgDown, this.imgLeft, this.imgRight, this.imgUp];
    randomArrow = newMoveset[Math.floor(Math.random() * 4)];
    if (randomArrow === this.imgLeft) {
        this.xArrows = 10;
        if (this.counter > 300) {

            randomMoves = this.imgRight;
        }
    }
    if (randomArrow === this.imgUp) {
        this.xArrows = 120;
        if (this.counter > 300) {
            randomMoves = this.imgDown;
        }
    }
    if (randomArrow === this.imgDown) {
        this.xArrows = 220;
        if (this.counter > 300) {
            randomMoves = this.imgUp;
        }
    }
    if (randomArrow === this.imgRight) {
        this.xArrows = 320;
        if (this.counter > 300) {
            randomMoves = this.imgLeft;
        }
    }
}

var left = 37;
var up = 38
var right = 39;
var down = 40;

Moving.prototype.setListeners = function () {
    document.onkeydown = function (e) {
        e.preventDefault(); {
            if ((e.keyCode == left || e.keyCode == up || e.keyCode == down || e.keyCode == right)) {
                if (this.yArrows < 35 && this.yArrows >= 15 && this.xArrows > 0) {
                    document.getElementById("perfect").style.display = "inline"

                    setTimeout(function () {
                        document.getElementById("perfect").style.display = "none";
                    }, 550);
                    document.getElementById("num").innerHTML = this.score += 5;
                }
                if (this.yArrows >= 35 && this.yArrows < 55 && this.xArrows > 0) {
                    document.getElementById("great").style.display = "inline"

                    setTimeout(function () {
                        document.getElementById("great").style.display = "none";
                    }, 550)
                    document.getElementById("num").innerHTML = this.score += 2;
                }
                if (this.yArrows >= 55 && this.xArrows > 0) {
                    document.getElementById("early").style.display = "inline"

                    setTimeout(function () {
                        document.getElementById("early").style.display = "none";
                    }, 550)
                    document.getElementById("num").innerHTML = this.score -= 1;
                }
                if (this.yArrows < 15 && this.xArrows > 0) {
                    document.getElementById("miss").style.display = "inline"

                    setTimeout(function () {
                        document.getElementById("miss").style.display = "none";
                    }, 550)
                    document.getElementById("num").innerHTML = this.score -= 2;
                }
            }
        }
    }.bind(this);
}