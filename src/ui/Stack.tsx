import { FunctionComponent, PropsWithChildren } from "react";
import "./UI.css";

const Stack: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <div className="stack">{children}</div>
);

export default Stack;
