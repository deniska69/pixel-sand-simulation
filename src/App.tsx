import { ChangeEvent, useState } from "react";
import "./App.css";
import Canvas from "components/Canvas";
import Controls from "components/Controls";
import { HStack } from "ui";
import { CANVAS_SIZE, GRID } from "constants";
import { isNumber } from "helpers";

const MAX_ROWS = Math.floor(CANVAS_SIZE.height / GRID.cellWidthAndHeigth);
const MAX_COLUMNS = Math.floor(CANVAS_SIZE.height / GRID.cellWidthAndHeigth);

const App = () => {
  const [countRows, setCountRows] = useState<number>(GRID.countRows);
  const [countColumns, setCountColumns] = useState<number>(GRID.countColumns);

  const onChangeCountRows = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (!isNumber(value)) return;
    setCountRows(Number(value));
  };

  const onChangeCountColumns = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (!isNumber(value)) return;
    setCountColumns(Number(value));
  };

  return (
    <HStack>
      <Canvas />
      <Controls
        {...{
          countRows,
          countColumns,
          onChangeCountRows,
          onChangeCountColumns,
        }}
      />
    </HStack>
  );
};

export default App;
