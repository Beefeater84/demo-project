import styles from "./ThemeSwithcher.module.css";
import {FC, useContext} from "react";
import classNames from "classnames";
import DartThemeIcon from "@/shared/assets/icons/theme-dark.svg";
import LightThemeIcon from "@/shared/assets/icons/theme-light.svg";
import {ThemeContext, THEMES} from "@/app/providers/them-provider";
import {Button} from "@/shared/ui/Button";


interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {

    const {className} = props;

    const {theme, toggleTheme} = useContext(ThemeContext)

    return (
        <Button
            className={classNames(styles.ThemeSwithcher, className)}
            onClick={toggleTheme}
        >
            {theme === THEMES.LIGHT ? <LightThemeIcon/> : <DartThemeIcon/>}
        </Button>
    )
}
