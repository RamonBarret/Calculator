import { useEffect, type FC } from "react";
import styles from "./themeSwitch.module.css";

export const ThemeSwitch: FC = () => {
  useEffect(() => {
    document.body.dataset.theme = "theme-1";
  }, []);

  return (
    <fieldset className={styles.wrapper}>
      <legend className={styles.title}>Theme</legend>

      <div className={styles.switch}>
        <div>
          <label htmlFor="theme-1">1</label>
          <label htmlFor="theme-2">2</label>
          <label htmlFor="theme-3">3</label>
        </div>

        <div>
          <input
            id="theme-1"
            name="theme"
            value="theme-1"
            type="radio"
            defaultChecked
            onChange={(e) => {
              document.body.dataset.theme = e.currentTarget.value;
            }}
          />
          <input
            id="theme-2"
            name="theme"
            value="theme-2"
            type="radio"
            onChange={(e) => {
              document.body.dataset.theme = e.currentTarget.value;
            }}
          />
          <input
            id="theme-3"
            name="theme"
            value="theme-3"
            type="radio"
            onChange={(e) => {
              document.body.dataset.theme = e.currentTarget.value;
            }}
          />
        </div>
      </div>
    </fieldset>
  );
};
