import {createRoot} from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import App from "./app/App";
import {ThemeProvider} from "@/app/providers/them-provider";

// Clear the existing HTML content
document.body.innerHTML = '<div id="root"></div>';
const rootNode = document.getElementById('root');

if (!!rootNode) {
    const root = createRoot(rootNode);
    root.render(
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    );
}
