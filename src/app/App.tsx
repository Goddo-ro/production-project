import "./styles/index.scss";
import { Link } from "react-router-dom";
import { classNames } from "helpers/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";

export const App = () => {
  const { theme, toggleTheme } = useTheme();
 
  return (
    <div className={classNames({cls: 'app', additional: [theme]})}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Link to={"/about"}>About</Link>
      <Link to={"/"}>Main</Link>
      <AppRouter />
    </div>
  );
};
