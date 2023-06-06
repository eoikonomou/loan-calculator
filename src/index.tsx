import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import { store } from './store';

let appElement = document.getElementById('loan-calculator-root');

if (!appElement) {
  appElement = document.createElement('div');
  appElement.setAttribute('id', 'loan-calculator-root');
  document.body.appendChild(appElement);
}

const root = ReactDOM.createRoot(appElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
