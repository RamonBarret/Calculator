import { type FC } from "react";
import "./display.css";

interface DisplayProps {
  value: string | number;
  color?: string;
  background?: string;
}

export const Display: FC<DisplayProps> = ({
  value,
  color = "var(--text-secondary_theme-1)",
  background = "var(--background-primary_theme-1)",
}) => {
  return (
    <div className="display-body" style={{ backgroundColor: background }}>
      <p className="display-content" style={{ color }}>
        {value}
      </p>
    </div>
  );
};
