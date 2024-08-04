import { classNames } from 'shared/lib/classNames/classNames';
import classes from './PageError.module.scss';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';

export const PageError = () => {
    const onReload = () => {
        location.reload();
    }
    const { t } = useTranslation();
    return (
        <div className={classNames({cls: classes.pageError})}>
            <p>{t('errorText')}</p>
            <Button onClick={onReload}>{t('errorReloadBtn')}</Button>
        </div>
    )
}