import {useTranslation} from "react-i18next";
import {useEffect} from "react";

export default function Main() {

    const {t} = useTranslation("main");

    return (
        <div className="container">
            <h1>{t('header')}</h1>
        </div>
    )
}