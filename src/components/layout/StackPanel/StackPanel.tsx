import type { FC, ReactNode } from "react";
import styles from "./stackpanel.module.css";

export enum StackPanelDirection {
  Horizontal = "horizontal",
  Vertical = "vertical",
}

export enum StackPanelAlignment {
  SpaceBetween = "space-between",
  Start = "start",
  Center = "center",
  End = "end",
}

interface StackPanelProps {
  children?: ReactNode;
  orientation?: StackPanelDirection;
  justifyContent?: StackPanelAlignment;
  alignItems?: StackPanelAlignment;
  gap?: number | string;
}

export const StackPanel: FC<StackPanelProps> = ({
  children,
  orientation = StackPanelDirection.Horizontal,
  justifyContent = StackPanelAlignment.Start,
  alignItems = StackPanelAlignment.Start,
  gap,
}) => {
  return (
    <div
      className={styles.stackpanel}
      data-orientation={orientation}
      style={{ justifyContent, alignItems, gap }}
    >
      {children}
    </div>
  );
};
