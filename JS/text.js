function Text(canvas) {
  this.canvas = canvas;

  this.width = 410
  this.height = 550
  this.text='READY'
}

Text.prototype.countDown = function () {
  this.canvas.ctx.font = '100px serif';
  this.canvas.ctx.fillStyle = "white";
  this.canvas.ctx.textAlign = "center";
  this.canvas.ctx.strokeText(this.text, this.width/2, this.height/2);
  this.canvas.ctx.fillText(this.text, this.width/2, this.height/2);
}