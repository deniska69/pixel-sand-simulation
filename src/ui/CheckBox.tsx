import { FC, useState } from "react";

interface ICheckBoxProps {
  label?: string;
  defaultChecked?: boolean;
  onChange: (value: boolean) => void;
}

const CheckBox: FC<ICheckBoxProps> = (props) => {
  const { label, defaultChecked = false, onChange } = props;

  const [checked, setChecked] = useState<boolean>(defaultChecked);

  const onClick = () => {
    setChecked(!checked);
    onChange(!checked);
  };

  return (
    <div className="checkbox" onClick={onClick}>
      <input type="checkbox" checked={checked} readOnly />
      <label className="noselect">{label}</label>
    </div>
  );
};

export default CheckBox;
