import { FC, ButtonHTMLAttributes, MouseEventHandler } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  onClick: MouseEventHandler;
}

const Button: FC<IButtonProps> = (props) => {
  const { text = "button", onClick } = props;
  return <button onClick={onClick}>{text}</button>;
};

export default Button;
