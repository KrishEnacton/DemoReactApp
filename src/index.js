import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import App from '../src/pages/App'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import Routers from './components/Routers';
import { Provider } from 'react-redux';
import './App.css';
import store from './components/Redux/Store';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store} >
      <React.StrictMode>
        <Routers />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
