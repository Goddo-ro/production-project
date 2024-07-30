import { useState } from 'react';
import classes from './Sidebar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

export const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(prev => !prev);
    }

    return (
        <div className={classNames({cls: classes.Sidebar, mods: {[classes.collapsed]: collapsed}})}>
            <Button onClick={toggleCollapsed}>
                Toggle
            </Button>
            <div className={classes.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    )
}