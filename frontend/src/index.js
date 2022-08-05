import './fonts/MPLUSRounded1c/MPLUSRounded1c-Black.ttf';
import './fonts/MPLUSRounded1c/MPLUSRounded1c-Bold.ttf';
import './fonts/MPLUSRounded1c/MPLUSRounded1c-ExtraBold.ttf';
import './fonts/MPLUSRounded1c/MPLUSRounded1c-Light.ttf';
import './fonts/MPLUSRounded1c/MPLUSRounded1c-Medium.ttf';
import './fonts/MPLUSRounded1c/MPLUSRounded1c-Regular.ttf';
import './fonts/MPLUSRounded1c/MPLUSRounded1c-Thin.ttf';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
