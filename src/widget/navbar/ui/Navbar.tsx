import styles from "./navbar.module.css";
import {FC, ReactNode, useContext} from "react";
import classNames from "classnames";
import {Link} from "react-router-dom";
import {ThemeContext} from "@/app/providers/them-provider/themeProvider";
import {AppLInk, AppLinkThemes} from "@/shared/ui/AppLink/AppLInk";

interface NavbarProps {
    className?: string,
    children?: ReactNode
}

export const Navbar: FC<NavbarProps> = ({
                                            className,
                                            children
                                        }) => {

    const {theme, toggleTheme} = useContext(ThemeContext)

    return (
        <div className={classNames(styles.navbar, className)}>
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

            <button onClick={toggleTheme}>Theme: {theme}</button>
        </div>
    )
}




