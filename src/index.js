import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import CartState from '../src/context/cart/CartState';


//Not sure if CartState goes after or before AuthProvider - putting it after to test out

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <CartState>  
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </CartState>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
