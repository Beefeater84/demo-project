import styles from "./pageLoader.module.scss";
import {FC} from "react";
import classNames from "classnames";
import {Spinner} from "@/shared/ui/Spinner";

interface pageLoaderProps {
    className?: string
}

export const PageLoader: FC<pageLoaderProps> = ({
                                                    className,
                                                }) => {
    return (
        <div className={classNames(styles.pageLoader, className)}>
            <Spinner/>
        </div>
    )
}
