import { classNames } from 'shared/lib/classNames/classNames';
import classes from './PageNotFound.module.scss';
import { useTranslation } from 'react-i18next';

export const PageNotFound = () => {
    const { t } = useTranslation();

    return (
        <div className={classNames({cls: classes.pageNotFound})}>
            {t('pageNotFound')}    
        </div>
    )
}