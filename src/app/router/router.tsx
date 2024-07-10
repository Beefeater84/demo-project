import {Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {routeConfig} from "@/shared/config/routerConfig/routeConfig";
import {PageLoader} from "@/widget/page-loader";

export function RouterConfig() {
    return (
        <Suspense fallback={<PageLoader />}>
            <div className="page">
                <Routes>
                    {
                        Object.values(routeConfig).map(({element, path}) => {
                            return (
                                <Route
                                    key={path}
                                    path={path}
                                    element={element}
                                />
                            )
                        })
                    }
                </Routes>
            </div>
        </Suspense>
    )
}