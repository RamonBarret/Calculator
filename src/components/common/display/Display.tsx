import { type FC } from "react";
import styles from "./display.module.css";

interface DisplayProps {
  value: string | number;
}

export const Display: FC<DisplayProps> = ({ value }) => {
  return <div className={styles.display}>{value}</div>;
};
