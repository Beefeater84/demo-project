import {Link, Route, Routes} from "react-router-dom";
import {lazy, Suspense, useContext} from "react";
import {ThemeContext} from "./providers/them-provider/themeProvider";
import "@/app/styles/index.scss";
import RouterConfig from "@/app/router/router";

const Main = lazy(() => import('../pages/main/main'));
const About = lazy(() => import('../pages/about/about'));

// ToDo вынести навбар в отдельный компонент
// Создать тему для приложения
// Сделать UI компонент ссылку
// Установить classnames


export default function App() {

    const {theme, toggleTheme} = useContext(ThemeContext)


    return (
        <div className="container" data-theme={theme}>
            <nav>
                <Link to="/">Main</Link>
                <Link to="/about">About</Link>
                <button onClick={toggleTheme}> F</button>
            </nav>

            <RouterConfig/>

        </div>
    )
}