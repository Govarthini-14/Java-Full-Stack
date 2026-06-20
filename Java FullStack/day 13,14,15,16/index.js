import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Counterclock from './Counterclock';
// import Effecthook from './Effecthook';
// import { Dependencyarray } from './Dependencyarray';
// import {App} from './App';
// import App1 from './App1';
// import {Compute} from './Compute';
// import {Clock} from './Clock';

// import { LoginPage } from './LoginPage';
// import { LoginHook } from './LoginHook';
import reportWebVitals from './reportWebVitals';
// import { Front } from './Front';
// import { Multiplication } from './Multiplication';
// import { OnChangeEvent } from './OnChangeEvent';
// import { SignUp } from './SignUp';
// import Apps from './Apps'; 
import { LoginConnection } from './LoginConnection';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />     */}
    {/* <App1 /> */}
    {/* <Compute /> */}
    {/* <Counterclock /> */}
    {/* <Clock /> */}
    {/* <Effecthook /> */}
    {/* <Dependencyarray /> */}
    {/* <LoginPage /> */}
    {/* <LoginHook /> */}
    {/* <OnChangeEvent /> */}
    {/* <SignUp /> */}
    {/* <Apps /> */}
    {/* < Front /> */}
    {/* < Multiplication /> */}
    <LoginConnection />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
