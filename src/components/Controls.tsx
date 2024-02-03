import { ChangeEventHandler, FC } from "react";
import { Stack, InputNumber } from "ui";

interface ControlsProps {
  countRows: number;
  countColumns: number;
  onChangeCountRows: ChangeEventHandler;
  onChangeCountColumns: ChangeEventHandler;
}

const Controls: FC<ControlsProps> = (props) => {
  const { countRows, countColumns, onChangeCountRows, onChangeCountColumns } =
    props;

  return (
    <Stack>
      <span>Count row:</span>
      <InputNumber value={countRows} onChange={onChangeCountRows} />
      <span>Count columns:</span>
      <InputNumber value={countColumns} onChange={onChangeCountColumns} />
    </Stack>
  );
};

export default Controls;
