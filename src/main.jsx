import React from 'react';
import store from './store';
import App from './App';
import ReactDOM from 'react-dom/client'
import './index.css';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}>
     <App />
   </Provider> 
  </React.StrictMode>
);



