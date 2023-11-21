import {createRoot} from 'react-dom/client';
import Counter from "./components/Counter";

// Clear the existing HTML content
document.body.innerHTML = '<div id="root"></div>';
const rootNode = document.getElementById('root');

// Render your React component instead
if (!!rootNode) {
    const root = createRoot(rootNode);
    root.render(
        <>
            <h2>Hello World</h2>
            <Counter/>
        </>
    );
}
