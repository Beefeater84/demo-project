import { createRoot } from 'react-dom/client';

// Clear the existing HTML content
document.body.innerHTML = '<div id="root"></div>';
const rootNode = document.getElementById('root');

// Render your React component instead
if (!!rootNode) {
    const root = createRoot(rootNode);
    root.render(<h1>Hello, world</h1>);
}
