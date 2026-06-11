import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Yeh import check karein
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* Iske bina Routes kaam nahi karenge! */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);