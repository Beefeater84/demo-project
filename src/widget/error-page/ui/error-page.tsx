import React from "react";
import styles from "./../styles/styles.module.css";
import {useTranslation} from "react-i18next";
import {Button} from "@/shared/ui/Button";

export function ErrorPage() {

    const {t} = useTranslation();

    const onClickHandler = () => {
        window.location.reload()
    }

    return (
        <div className={styles.error}>
            <div>
                <h1>{t('errorBoundary')}</h1>
                <Button
                    className={styles.btn}
                    onClick={onClickHandler}
                >{t('errorReloadBtn')}</Button>
            </div>

        </div>
    )
}