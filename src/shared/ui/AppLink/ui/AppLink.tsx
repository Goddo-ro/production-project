import { LinkProps } from 'react-router-dom';
import classes from './AppLink.module.scss'; 
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const { to, className, children, theme = AppLinkTheme.PRIMARY, ...rest } = props;
    return (
        <Link
            to={to}
            className={classNames({cls: classes.link, additional: [className, classes[theme]]})}
            {...rest} 
        >
            {children} 
        </Link>
    )
}