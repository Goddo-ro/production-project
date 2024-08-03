import { classNames } from "shared/lib/classNames/classNames";
import classes from './Navbar.module.scss';
import { AppLink } from "shared/ui/AppLink";
import { AppLinkTheme } from "shared/ui/AppLink/ui/AppLink";
import { useTranslation } from "react-i18next";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames({cls: classes.navbar, additional: [className]})}>
            <div className={classes.links}>
                <AppLink theme={AppLinkTheme.INVERTED} to={"/about"}>{t('aboutLink')}</AppLink>
                <AppLink theme={AppLinkTheme.INVERTED} to={"/"}>{t('mainLink')}</AppLink>
            </div>
        </div>
    )
}