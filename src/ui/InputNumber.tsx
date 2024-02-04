import { FC, ChangeEventHandler, InputHTMLAttributes } from "react";

interface IInputNumberProps extends InputHTMLAttributes<HTMLInputElement> {
  value: number;
  onChange: ChangeEventHandler;
}

const InputNumber: FC<IInputNumberProps> = (props) => (
  <input pattern="[0-9]*" inputMode="numeric" {...props} />
);

export default InputNumber;
