import { FunctionComponent, PropsWithChildren } from "react";
import "./UI.css";

const HStack: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <div className="hstack">{children}</div>
);

export default HStack;
