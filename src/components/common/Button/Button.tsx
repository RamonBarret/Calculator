import type { ReactNode, MouseEvent as ReactMouseEvent, FC } from "react";
import styles from "./button.module.css";

// eslint-disable-next-line react-refresh/only-export-components
export enum ButtonVariant {
  Primary = "primary",
  Secondary = "secondary",
  Accent = "accent",
}

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  onClick?: (e: ReactMouseEvent<HTMLButtonElement>) => void;
}

export const Button: FC<ButtonProps> = ({
  children,
  variant,
  className = "",
  onClick,
}) => {
  return (
    <button
      type="button"
      data-variant={variant}
      onClick={onClick}
      className={`${styles.button} ${className}`}
    >
      {children}
    </button>
  );
};
