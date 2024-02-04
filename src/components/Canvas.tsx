import { useEffect, useRef, memo, FC, useCallback } from "react";
import "./Canvas.css";
import { CANVAS_SIZE, GRID } from "constants";

interface CanvasProps {
  countRows: number;
  countColumns: number;
}

const Canvas: FC<CanvasProps> = (props) => {
  const { countRows, countColumns } = props;

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const width = CANVAS_SIZE.width;
  const height = CANVAS_SIZE.height;
  const centerHeight = height / 2;
  const centerWidth = width / 2;

  const drawCenterLines = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      console.log("drawCenterLines");
      ctx.setLineDash([5, 3]);
      ctx.lineWidth = 0.4;

      ctx.beginPath();
      ctx.moveTo(centerWidth, 0);
      ctx.lineTo(centerWidth, height);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, centerHeight);
      ctx.lineTo(width, centerHeight);
      ctx.stroke();
    },
    [width, height, centerWidth, centerHeight]
  );

  const drawGrid = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      countRows: number,
      countColumns: number
    ) => {
      console.log("drawGrid");
      ctx.setLineDash([]);
      ctx.lineWidth = 2;

      const startPointX =
        centerWidth - Math.round((countColumns * GRID.cellWidthAndHeigth) / 2);
      const startPointY =
        centerHeight - Math.round((countRows * GRID.cellWidthAndHeigth) / 2);

      for (let x = 0; x < countColumns; x++) {
        for (let y = 0; y < countRows; y++) {
          ctx.strokeRect(
            startPointX + GRID.cellWidthAndHeigth * x,
            startPointY + GRID.cellWidthAndHeigth * y,
            GRID.cellWidthAndHeigth,
            GRID.cellWidthAndHeigth
          );
        }
      }
    },
    [centerWidth, centerHeight]
  );

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    context.fillStyle = "white";

    if (countRows && countColumns) {
      context.clearRect(0, 0, CANVAS_SIZE.width, CANVAS_SIZE.height);
      drawCenterLines(context);
      drawGrid(context, countRows, countColumns);
    }
  }, [countRows, countColumns, drawCenterLines, drawGrid]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};

export default memo(Canvas);
