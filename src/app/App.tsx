import {useContext} from "react";
import {ThemeContext} from "./providers/them-provider/themeProvider";
import "@/app/styles/index.scss";
import {RouterConfig} from "@/app/router/router";
import {Navbar} from "@/widget/navbar";


export default function App() {

    const {theme, toggleTheme} = useContext(ThemeContext)


    return (
        <div className="app" data-theme={theme}>
            <Navbar />
            <RouterConfig/>
        </div>
    )
}