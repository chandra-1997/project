# project
project website 
i have this tow file is import in app.js file/folder.
^
import logo from './logo.svg';
import './App.css';
import Header from './Assessment1/Header';
import Home from './Assessment1/Home';

function App() {
  return (
    <div>
     <Header/> <-----
     <Home/><------                                                ^
                                                                   |
    </div>
  );
}

export default App;
this app.js file/folder i have import in index.js file/folder.       |
^
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import App from './App';





ReactDOM.render(
  <React.StrictMode>  
     <App/>                            <-------*---
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

than i have run my command in our terminal  >npm start 
