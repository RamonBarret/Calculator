import type { FC, ReactNode } from "react";
import styles from "./keypad.module.css";

interface KeypadProps {
  children?: ReactNode;
}

export const Keypad: FC<KeypadProps> = ({ children }) => {
  return <div className={styles.keypad}>{children}</div>;
};
