function Background(canvas) {
    this.canvas = canvas;

    this.wBack = 410;
    this.hBack = 600;
    this.xBack = 0;
    this.yBack = 0;
    this.dy = 15;

    this.bc1 = new Image();
    this.bc1.src = "./Imagenes/b1_opt.jpg";
}
Background.prototype.firstBc = function () {
    this.canvas.ctx.drawImage(this.bc1, this.xBack, this.yBack, this.wBack, this.hBack)
    this.canvas.ctx.drawImage(this.bc1, this.xBack, this.yBack + this.hBack, this.wBack, this.hBack)
}
Background.prototype.move = function () {
    this.yBack -= this.dy;
    if (this.yBack < -this.hBack) this.yBack = 0;
}
