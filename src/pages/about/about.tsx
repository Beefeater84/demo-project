import {useTranslation} from "react-i18next";

export default function About() {

    const { t, i18n } = useTranslation(['about']);

    return (
        <div className="container">
            <h1>{t("About")}</h1>
        </div>
    )
}