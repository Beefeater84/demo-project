import {Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {routeConfig} from "@/shared/config/routerConfig/routeConfig";

export default function RouterConfig() {
    return (
        <Suspense fallback={<>Loading ...</>}>
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
        </Suspense>
    )
}