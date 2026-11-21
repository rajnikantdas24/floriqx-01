import React from 'react';
import ReactDOM from 'react-dom/client';
// Bootstrap's Tab plugin (used by the tabs on the About page via data-bs-toggle="tab")
import 'bootstrap/js/dist/tab';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
