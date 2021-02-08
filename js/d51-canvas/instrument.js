const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;
// 初始角度
// 结束角度
const startAngle = (Math.PI * 160) / 180;
const endAngle = (Math.PI * 380) / 180;
console.log(startAngle, endAngle);
const dot = new Dot();
const dotSPeed = 0.01;
let angle = startAngle;
const radius = 150;
(function drawFrame() {
  ctx.save();
  ctx.clearRect(0, 0, width, height);
  ctx.translate(width / 2, height / 2);

  if (angle <= endAngle) {
    dot.x = radius * Math.cos(angle);
    dot.y = radius * Math.sin(angle);
    angle += dotSPeed;
  }
  dot.draw();

  requestAnimationFrame(drawFrame);

  drawBigCircle(ctx);
  sideCircle(ctx);
  drawBigScal(ctx);
  // console.log(1);
  ctx.restore();
})();

function Dot() {
  this.x = 0;
  this.y = 0;
  this.draw = () => {
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.arc(this.x, this.y, 3, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.restore();
  };
}
// 画大圆
function drawBigCircle(ctx) {
  ctx.save();
  ctx.beginPath();
  ctx.arc(0, 0, radius, startAngle, endAngle);
  ctx.strokeStyle = "rgba(255,255,255,0.2)";
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.restore();
}
// 画小圆
function sideCircle(ctx) {
  ctx.save();
  ctx.beginPath();
  ctx.arc(0, 0, radius - 15, (Math.PI * 160) / 180, (Math.PI * 20) / 180);
  ctx.strokeStyle = "rgba(255,255,255,0.2)";
  ctx.lineWidth = 10;
  ctx.stroke();
  ctx.restore();
}

// 画六个刻度
function drawBigScal(ctx) {
  // 张角平均分成6份,每份的弧度
  // 注意角度旋转是顺时针方向
  const angle = (Math.PI * 220) / 6 / 180;
  ctx.save();
  ctx.rotate((Math.PI * 160) / 180);
  for (let index = 0; index <= 6; index++) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "rgba(255,255,255,0.3)";
    ctx.moveTo(radius - 20, 0);
    ctx.lineTo(radius - 10, 0);
    ctx.stroke();
    if (index !== 6) {
      drawSmallScal(ctx, angle);
    }
    // ctx.rotate(angle);
  }
  ctx.restore();
}
// 画大刻度之间的小刻度
function drawSmallScal(ctx, angle) {
  // 画小的刻度
  // 注意角度旋转是顺时针方向
  const smallAngle = angle / 5;
  for (let index = 0; index < 5; index++) {
    ctx.rotate(smallAngle);
    if (index !== 4) {
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(255,255,255,0.3)";
      ctx.moveTo(radius - 20, 0);
      ctx.lineTo(radius - 15, 0);
      ctx.stroke();
    }
  }
  // ctx.restore();
}
