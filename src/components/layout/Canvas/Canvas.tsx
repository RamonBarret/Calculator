import type { FC, ReactNode } from "react";

interface CanvasProps {
  width?: string | number;
  children?: ReactNode;
}

export const Canvas: FC<CanvasProps> = ({ width, children }) => {
  return <div style={{ width }}>{children}</div>;
};
