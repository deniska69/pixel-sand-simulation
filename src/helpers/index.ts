import { CANVAS_SIZE } from "constants";

const isNumber = (value: unknown): boolean => {
  return !isNaN(Number(value));
};

const drawCell = (
  ctx: CanvasRenderingContext2D,
  x1: number,
  y1: number,
  x2: number,
  y2: number
) => {
  ctx.rect(x1, y1, x2, y2);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.lineWidth = 1;
  ctx.strokeStyle = "black";
  ctx.stroke();
};

const clearCanvas = (ctx: CanvasRenderingContext2D) => {
  ctx.clearRect(0, 0, CANVAS_SIZE.width, CANVAS_SIZE.height);
  ctx.beginPath();
  ctx.closePath();
  ctx.stroke();
};

export { isNumber, drawCell, clearCanvas };
