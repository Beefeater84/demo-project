import styles from "./notFoundPage.module.css";
import {FC} from "react";
import classNames from "classnames";
import {useTranslation} from "react-i18next";

interface notFoundPageProps {
    className?: string
}

export const NotFoundPage: FC<notFoundPageProps> = ({
                                                        className,
                                                    }) => {

    const {t} = useTranslation();

    return (
        <div className={classNames("container", styles.notFoundPage, className)}>
            <h1>{t('Not found')}</h1>
        </div>
    )
}
