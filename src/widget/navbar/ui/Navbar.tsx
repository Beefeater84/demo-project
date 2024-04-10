import styles from "./navbar.module.css";
import {FC, ReactNode} from "react";
import classNames from "classnames";

interface NavbarProps {
    className?: string,
    children: ReactNode
}

export const Navbar: FC<NavbarProps> = ({
                                            className,
                                            children
                                        }) => {
    return (
        <div className={classNames(styles.navbar, className)}>
            {children}
        </div>
    )
}




