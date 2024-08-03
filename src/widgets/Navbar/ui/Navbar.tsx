import { classNames } from "shared/lib/classNames/classNames";
import classes from './Navbar.module.scss';
import { AppLink } from "shared/ui/AppLink";
import { AppLinkTheme } from "shared/ui/AppLink/ui/AppLink";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames({cls: classes.navbar, additional: [className]})}>
            <div className={classes.links}>
                <AppLink theme={AppLinkTheme.INVERTED} to={"/about"}>About</AppLink>
                <AppLink theme={AppLinkTheme.INVERTED} to={"/"}>Main</AppLink>
            </div>
        </div>
    )
}