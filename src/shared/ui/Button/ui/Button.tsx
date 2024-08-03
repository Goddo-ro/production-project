import { ButtonHTMLAttributes, FC } from "react";
import classes from "./Button.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export enum ButtonTheme {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, theme = ButtonTheme.CLEAR, children, ...rest } = props;

  return (
    <button
      className={classNames({
        cls: classes.button,
        additional: [className, classes[theme]],
      })}
      {...rest}
    >
      {children}
    </button>
  );
};
