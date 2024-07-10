import "./Spinner.css";
import {FC} from "react";
import classNames from "classnames";

interface SpinnerProps {
    className?: string
}

export const Spinner: FC<SpinnerProps> = ({
                                              className,
                                          }) => {
    return (
        <div className={classNames("loader", className)}>
            <span className="loader"></span>
        </div>
    )
}
