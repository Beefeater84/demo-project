import {Link} from "react-router-dom";
import {useContext} from "react";
import {ThemeContext} from "./providers/them-provider/themeProvider";
import "@/app/styles/index.scss";
import RouterConfig from "@/app/router/router";
import {Navbar} from "@/widget/navbar";


export default function App() {

    const {theme, toggleTheme} = useContext(ThemeContext)


    return (
        <div className="app" data-theme={theme}>
            <Navbar>
                <Link to="/">Main</Link>
                <Link to="/about">About</Link>
                <button onClick={toggleTheme}> F</button>
            </Navbar>
            <RouterConfig/>

        </div>
    )
}