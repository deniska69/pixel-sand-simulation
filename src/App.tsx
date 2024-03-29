import { useState } from "react";
import "./App.css";
import Canvas from "components/Canvas";
import Controls from "components/Controls";
import { HStack } from "ui";
import { DrawConfig } from "types";

const App = () => {
  const [drawConfig, setDrawConfig] = useState<DrawConfig | null>(null);

  const onChangeDrawConfig = (config: DrawConfig) => setDrawConfig(config);

  return (
    <HStack>
      <Canvas
        countRows={drawConfig?.countRows || 0}
        countColumns={drawConfig?.countColumns || 0}
      />
      <Controls onChangeDrawConfig={onChangeDrawConfig} />
    </HStack>
  );
};

export default App;
