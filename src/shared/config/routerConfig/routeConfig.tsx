import Main from "@/pages/main/main";
import {RouteProps} from "react-router-dom";
import About from "@/pages/about/about";
import {NotFoundPage} from "@/pages/notFound";

export enum AppRoutes {
    MAIN = "main",
    ABOUT = "about",
    NOT_FOUND = "Not found",
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath[AppRoutes.MAIN],
        element: <Main/>
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath[AppRoutes.ABOUT],
        element: <About />
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath[AppRoutes.NOT_FOUND],
        element: <NotFoundPage />
    }
}

