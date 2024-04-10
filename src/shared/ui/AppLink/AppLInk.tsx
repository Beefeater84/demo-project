import styles from "./AppLInk.module.css";
import {FC} from "react";
import classNames from "classnames";
import {Link, LinkProps} from "react-router-dom";


export enum AppLinkThemes {
    PRIMARY = "primary",
    SECONDARY = "secondary"
}


interface AppLInkProps extends LinkProps {
    className?: string,
    theme?: AppLinkThemes
}

export const AppLInk: FC<AppLInkProps> = (props) => {

    const {className, to, children, theme = AppLinkThemes.PRIMARY, ...otherProps} = props

    return (
        <Link
            className={classNames(styles.AppLInk, className, styles[theme])}
            to={to}
            {...otherProps}
        >
            {children}
        </Link>
    )
}
