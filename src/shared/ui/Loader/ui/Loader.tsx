import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Loader.module.scss';

export const Loader = () => {
    return (
        <div className={classNames({cls: classes.loader})}></div>
    )
}