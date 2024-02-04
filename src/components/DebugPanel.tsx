import { useState } from "react";
import { Stack, CheckBox } from "ui";
import "./DebugPanel.css";

const DebugPanel = () => {
  const [show, setShow] = useState<boolean>(false);

  const onChangeShow = (checked: boolean) => {
    setShow(checked);
  };

  return (
    <div className={`debug-wrap debug-wrap-${show ? "on" : "off"}`}>
      <CheckBox onChange={onChangeShow} label="debug panel" />
      {show && (
        <Stack>
          <span>show debug panel</span>
        </Stack>
      )}
    </div>
  );
};

export default DebugPanel;
