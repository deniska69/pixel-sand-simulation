import { FC, useState, ChangeEvent } from "react";
import { Stack, InputNumber, Button } from "ui";
import { GRID, CANVAS_SIZE } from "constants";
import { isNumber } from "helpers";
import { DrawConfig } from "types";

const MAX_ROWS = Math.floor(CANVAS_SIZE.height / GRID.cellWidthAndHeigth);
const MAX_COLUMNS = Math.floor(CANVAS_SIZE.height / GRID.cellWidthAndHeigth);

interface ControlsProps {
  onChangeDrawConfig: (config: DrawConfig) => void;
}

const Controls: FC<ControlsProps> = (props) => {
  const { onChangeDrawConfig } = props;

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

  const onClick = () =>
    onChangeDrawConfig({
      countRows: countRows < MAX_ROWS ? countRows : MAX_ROWS,
      countColumns: countColumns < MAX_COLUMNS ? countColumns : MAX_COLUMNS,
    });

  return (
    <Stack>
      <span>Count row:</span>
      <InputNumber value={countRows} onChange={onChangeCountRows} />
      <span>Count columns:</span>
      <InputNumber value={countColumns} onChange={onChangeCountColumns} />
      <Button text="Draw grid" onClick={onClick} />
    </Stack>
  );
};

export default Controls;
