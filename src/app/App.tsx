import {useContext} from "react";
import {ThemeContext} from "@/app/providers/them-provider";
import "@/app/styles/index.scss";
import {RouterConfig} from "@/app/router/router";
import {Navbar} from "@/widget/navbar";
import {Sidebar} from "@/widget/sidebar";


export default function App() {

    const {theme} = useContext(ThemeContext)


    return (
        <div className="app" data-theme={theme}>
            <Navbar />
            <div className="page-wrapper">
                <Sidebar />
                <RouterConfig/>
            </div>

        </div>
    )
}