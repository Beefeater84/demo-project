import Main from "@/pages/main/main";
import {RouteProps} from "react-router-dom";
import About from "@/pages/about/about";

export enum AppRoutes {
    MAIN = "main",
    ABOUT = "about",
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath[AppRoutes.MAIN],
        element: <Main/>
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath[AppRoutes.ABOUT],
        element: <About />
    }
}

