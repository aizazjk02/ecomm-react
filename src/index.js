import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
// To make the routing work throughout the app 
import { BrowserRouter } from 'react-router-dom';
// import { UserProvider } from './context/user.context';
// import { CategoriesProvider } from './context/categories.context';
// import { CartProvider } from './context/cart.context';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

