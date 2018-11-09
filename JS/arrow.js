function Arrow(canvas) {
    this.canvas = canvas;

    this.wArrow = 80;
    this.hArrow = 80;
    this.xArrow = 10;
    this.yArrow = 30;

    this.imgLeft = new Image();
    this.imgLeft.src = "./Imagenes/arrow-left"

    this.imgRight = new Image();
    this.imgRight.src = "./Imagenes/arrow-right"

    this.imgUp = new Image();
    this.imgUp.src = "./Imagenes/arrow-up"

    this.imgDown = new Image();
    this.imgDown.src = "./Imagenes/arrow-down"
}

Arrow.prototype.draw = function () {


    this.canvas.ctx.drawImage(this.imgLeft, this.xArrow, this.yArrow, this.wArrow, this.hArrow);
    this.canvas.ctx.drawImage(this.imgUp, this.xArrow + 110, this.yArrow, this.wArrow, this.hArrow);
    this.canvas.ctx.drawImage(this.imgDown, this.xArrow + 210, this.yArrow, this.wArrow, this.hArrow);
    this.canvas.ctx.drawImage(this.imgRight, this.xArrow + 310, this.yArrow, this.wArrow, this.hArrow);
}