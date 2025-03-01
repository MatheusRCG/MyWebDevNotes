// -- CANVAS --
const canvas = document.getElementById("canvas-example-squares");
const ctx = canvas.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(100, 50);
ctx.lineTo(200, 0);
ctx.strokeStyle = "#0000FF";
ctx.lineWidth = 3;
ctx.stroke();

// -- RECTANGLE --
const canvasRectangle = document.getElementById("canvas-example-rectangle");
const ctxRectangle = canvasRectangle.getContext("2d");
ctxRectangle.fillStyle = "#00FFFF";
ctxRectangle.fillRect(10, 10, 100, 50);
ctxRectangle.strokeStyle = "#0000FF";
ctxRectangle.lineWidth = 3;
ctxRectangle.strokeRect(10, 10, 100, 50);

// -- PATH --
const canvasPath = document.getElementById("canvas-example-path");
const ctxPath = canvasPath.getContext("2d");
ctxPath.beginPath();
ctxPath.beginPath();
ctxPath.moveTo(50, 50);
ctxPath.lineTo(100, 50);
ctxPath.lineTo(100, 100);
ctxPath.closePath();
ctxPath.strokeStyle = "#FF0000";
ctxPath.lineWidth = 3;
ctxPath.stroke();

ctxPath.beginPath();
ctxPath.moveTo(75, 25);
ctxPath.lineTo(150, 75);
ctxPath.strokeStyle = "#FF00FF";
ctxPath.lineWidth = 3;
ctxPath.stroke();

// -- CIRCLE --
const canvasCircle = document.getElementById("canvas-example-circle");
const ctxCircle = canvasCircle.getContext("2d");

let x = 100;
let y = 75;
let radius = 50;
let startAngle = 0;
let endAngle = 2 * Math.PI;

ctxCircle.beginPath();
ctxCircle.arc(x, y, radius, startAngle, endAngle);
ctxCircle.fillStyle = "#FF0000";
ctxCircle.fill();

// -- ANIMATION --
const canvasAnimation = document.getElementById("canvas-example-animation");
const ctxAnimation = canvasAnimation.getContext("2d");

let circle = {
  x: 100,
  y: 75,
  radius: 50,
  start: 0,
  end: 0,
  counterclockwise: false,
};

function drawCircle(circle) {
  ctxAnimation.beginPath();
  ctxAnimation.rect(0, 0, 200, 150);
  ctxAnimation.fillStyle = "#FFFFFF";
  ctxAnimation.fill();

  ctxAnimation.beginPath();
  ctxAnimation.fillStyle = "#FF00FF";
  ctxAnimation.arc(
    circle.x,
    circle.y,
    circle.radius,
    circle.start,
    circle.end,
    circle.counterclockwise
  );
  ctxAnimation.fill();
}

setInterval(function () {
  circle.end += 0.5;

  if (circle.end >= 2 * Math.PI) {
    circle.end = 0;
    circle.counterclockwise = !circle.counterclockwise;
  }

  drawCircle(circle);
}, 100);
