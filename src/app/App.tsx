import {Link, Route, Routes} from "react-router-dom";
import {lazy, Suspense, useCallback, useContext} from "react";
import {ThemeContext} from "./providers/them-provider/themeProvider";
import SwitchBtn from "../shared/ui/buttons/switch";
import "@/app/styles/global.css";

const Main = lazy(() => import('../pages/main/main'));
const About = lazy(() => import('../pages/about/about'));


export default function App() {

    const {theme, toggleTheme} = useContext(ThemeContext)


    return (
        <div className="container" data-theme={theme}>
            <nav>
                <Link to="/">Main</Link>
                <Link to="/about">About</Link>
                <button onClick={toggleTheme}> F</button>
                {/*<div onClick={toggleTheme}>*/}
                {/*    <span>Light</span>*/}
                {/*    <SwitchBtn />*/}
                {/*    <span>Dark</span>*/}
                {/*</div>*/}
               </nav>
            <Suspense fallback={<>Loading ...</>}>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}