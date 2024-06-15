import {useTranslation} from "react-i18next";

export default function Main() {

    const {t} = useTranslation("main");

    return (
        <div className="container">
            <h1>{t('header')}</h1>
        </div>
    )
}