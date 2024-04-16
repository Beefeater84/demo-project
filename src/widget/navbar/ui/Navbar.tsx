import styles from "./navbar.module.css";
import {FC} from "react";
import classNames from "classnames";
import {AppLInk, AppLinkThemes} from "@/shared/ui/AppLink/AppLInk";

interface NavbarProps {
    className?: string,
}

export const Navbar: FC<NavbarProps> = (props) => {

    const {className} = props;

    return (
        <div className={classNames(styles.navbar, className)}>

            <nav className={styles.links}>
                <AppLInk
                    to="/"
                    theme={AppLinkThemes.SECONDARY}
                >
                    Main
                </AppLInk>
                <AppLInk
                    to="/about"
                    theme={AppLinkThemes.SECONDARY}
                >
                    About
                </AppLInk>
            </nav>
        </div>
    )
}




