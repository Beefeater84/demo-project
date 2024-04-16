import styles from "./Sidebar.module.scss";
import {FC, useState} from "react";
import classNames from "classnames";
import {ThemeSwitcher} from "@/widget/theme-switcher";
import {Button} from "@/shared/ui/Button";

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({
                                              className,
                                          }) => {

    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prevState => !prevState)
    }

    return (
        <div className={classNames(styles.Sidebar, className, {[styles.collapsed]: collapsed})}>
            <Button onClick={onToggle}>
                Toggle
            </Button>


            <div className={styles.switcher}>
                <ThemeSwitcher />
            </div>
        </div>
    )
}
