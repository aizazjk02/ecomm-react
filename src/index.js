import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
// To make the routing work throughout the app 
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/user.context';
import { ProductsProvider } from './context/products.context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

