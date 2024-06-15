import styles from "./LanguageSwithcher.module.css";
import {FC} from "react";
import classNames from "classnames";
import {Button} from "@/shared/ui/Button";
import {useTranslation} from "react-i18next";


interface ThemeSwitcherProps {
    className?: string
}

export const LanguageSwitcher: FC<ThemeSwitcherProps> = (props) => {

    const {className} = props;
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        void i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
    }

    return (
        <Button
            className={classNames(styles.ThemeSwithcher, className)}
            onClick={toggleLanguage}
        >

            {i18n.language === "ru" ? t('язык') : t('язык')}
        </Button>
    )
}
