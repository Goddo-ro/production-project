import { Theme, useTheme } from "app/providers/ThemeProvider";
import classes from "./ThemeSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button } from "shared/ui/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { className } = props;

  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames({
        cls: classes.ToggleTheme,
        additional: [className],
      })}
      onClick={toggleTheme}
    >
        {
            theme === Theme.DARK
                ? <DarkIcon />
                : <LightIcon />
        }
    </Button>
  );
};
