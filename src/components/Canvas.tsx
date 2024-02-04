import { useEffect, useRef, FC, useCallback } from "react";
import "./Canvas.css";
import { CANVAS_SIZE, GRID } from "constants";
import { clearCanvas, drawCell } from "helpers";
import DebugPanel from "./DebugPanel";

interface ICanvasProps {
  countRows: number;
  countColumns: number;
}

const Canvas: FC<ICanvasProps> = (props) => {
  const { countRows, countColumns } = props;

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const width = CANVAS_SIZE.width;
  const height = CANVAS_SIZE.height;
  const centerHeight = height / 2;
  const centerWidth = width / 2;

  const drawGrid = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      countRows: number,
      countColumns: number
    ) => {
      clearCanvas(ctx);

      const x1 =
        centerWidth - Math.round((countColumns * GRID.cellWidthAndHeigth) / 2);
      const y1 =
        centerHeight - Math.round((countRows * GRID.cellWidthAndHeigth) / 2);

      for (let x = 0; x < countColumns; x++) {
        for (let y = 0; y < countRows; y++) {
          drawCell(
            ctx,
            x1 + GRID.cellWidthAndHeigth * x,
            y1 + GRID.cellWidthAndHeigth * y,
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

    if (countRows && countColumns) drawGrid(context, countRows, countColumns);
  }, [countRows, countColumns, drawGrid]);

  return (
    <>
      <DebugPanel />
      <canvas ref={canvasRef} width={width} height={height} />
    </>
  );
};

export default Canvas;
