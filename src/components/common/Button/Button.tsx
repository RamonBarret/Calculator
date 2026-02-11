import type { ReactNode, MouseEvent as ReactMouseEvent } from "react";
import styles from "./button.module.css";

// eslint-disable-next-line react-refresh/only-export-components
export enum ButtonVariant {
  Primary = "primary",
  Secondary = "secondary",
  Accent = "accent",
}

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  onClick?: (e: ReactMouseEvent<HTMLButtonElement>) => void;
};

export function Button({
  children,
  variant,
  className = "",
  onClick,
}: ButtonProps) {
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
}
