import { useState } from 'react';
import classes from './Sidebar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher/ui/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

export const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const { t } = useTranslation();

    const toggleCollapsed = () => {
        setCollapsed(prev => !prev);
    }

    return (
        <div className={classNames({cls: classes.sidebar, mods: {[classes.collapsed]: collapsed}})}>
            <Button onClick={toggleCollapsed}>
                {t('toggleSidebar')}
            </Button>
            <div className={classes.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    )
}