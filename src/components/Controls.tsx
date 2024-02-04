import { FC, useState, ChangeEvent } from "react";
import { Stack, InputNumber, Button } from "ui";
import { GRID, CANVAS_SIZE } from "constants";
import { isNumber } from "helpers";
import { DrawConfig } from "types";

const MAX_ROWS = Math.floor(CANVAS_SIZE.height / GRID.cellWidthAndHeigth) - 7;
const MAX_COLUMNS = Math.floor(CANVAS_SIZE.width / GRID.cellWidthAndHeigth) - 7;

interface IControlsProps {
  onChangeDrawConfig: (config: DrawConfig) => void;
}

const Controls: FC<IControlsProps> = (props) => {
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

  const onClick = () => {
    const _countRows = countRows < MAX_ROWS ? countRows : MAX_ROWS;
    const _countColumns =
      countColumns < MAX_COLUMNS ? countColumns : MAX_COLUMNS;

    setCountRows(_countRows);
    setCountColumns(_countColumns);

    onChangeDrawConfig({
      countRows: _countRows,
      countColumns: _countColumns,
    });
  };

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
