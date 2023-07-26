import ReactDom from 'react-dom/client';
import App from './App';



const createRoot = ReactDom.createRoot(document.getElementById('root'));

createRoot.render(<App/>)