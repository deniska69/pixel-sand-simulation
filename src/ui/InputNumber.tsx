import { FC, ChangeEventHandler, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: number;
  onChange: ChangeEventHandler;
}

const InputNumber: FC<InputProps> = (props) => (
  <input pattern="[0-9]*" inputMode="numeric" {...props} />
);

export default InputNumber;
