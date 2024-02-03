import { FC, PropsWithChildren } from "react";
import "./UI.css";

const Stack: FC<PropsWithChildren> = ({ children }) => (
  <div className="stack">{children}</div>
);

export default Stack;
