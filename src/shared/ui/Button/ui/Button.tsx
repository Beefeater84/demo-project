import styles from "./Button.module.css";
import {ButtonHTMLAttributes, FC, ReactNode} from "react";
import classNames from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string
    children?: ReactNode
}

export const Button: FC<ButtonProps> = (props) => {
    const {className, children, ...otherProps} = props;
    return (
        <button className={classNames(styles.Button, className)} {...otherProps}>
            {children}
        </button>
    )
}
