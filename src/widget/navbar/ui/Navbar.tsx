import styles from "navbar.module.css";
import {FC} from "react";
import classNames from "classnames";

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({
                                            className,
                                        }) => {
    return (
        <div className={classNames(styles.navbar, className)}>

        </div>
    )
}




