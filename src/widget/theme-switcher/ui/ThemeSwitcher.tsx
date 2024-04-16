import styles from "./ThemeSwithcher.module.css";
import {FC, useContext} from "react";
import classNames from "classnames";
import DartThemeIcon from "@/shared/assets/icons/theme-dark.svg";
import LightThemeIcon from "@/shared/assets/icons/theme-light.svg";
import {ThemeContext} from "@/app/providers/them-provider";

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {

    const {className} = props;

    const {theme, toggleTheme} = useContext(ThemeContext)

    return (
        <button
            className={classNames(styles.ThemeSwithcher, className)}
            onClick={toggleTheme}
        >
            {theme === "light" ? <LightThemeIcon/> : <DartThemeIcon/>}
        </button>
    )
}
