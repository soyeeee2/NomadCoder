const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 500;

const colors = [
  "#fc5c65",
  "#fd9644",
  "#fed330",
  "#26de81",
  "#2bcbba",
  "#45aaf2",
  "#4b7bec",
  "#a55eea",
];

ctx.lineWidth = 2;

let Xcoord = 0;
let Ycoord = 0;

function onMove(event) {
  ctx.beginPath();
  ctx.moveTo(Xcoord, Ycoord);
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  ctx.strokeStyle = randomColor;
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
}

function onClick(event) {
  ctx.moveTo(event.offsetX, event.offsetY)
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("click", onClick);
