import { classNames } from 'shared/lib/classNames/classNames';
import classes from './PageLoader.module.scss';
import { Loader } from 'shared/ui/Loader';

export const PageLoader = () => {
    return (
        <div className={classNames({cls: classes.pageLoader})}>
            <Loader />
        </div>
    )
}