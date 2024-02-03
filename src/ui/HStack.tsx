import { FC, PropsWithChildren } from "react";
import "./UI.css";

const HStack: FC<PropsWithChildren> = ({ children }) => (
  <div className="hstack">{children}</div>
);

export default HStack;
