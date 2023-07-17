import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap5/src/css/bootstrap.min.css';
import MainApp from './components/MainApp';
import './components/Layout.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/NavbarComponents/SignUp';
import Solutions from './components/NavbarComponents/Solutions';
import Login from './components/NavbarComponents/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Router>
      <Routes>
        <Route path='/' element={<MainApp />}></Route>
        <Route path='/SignUp' element={<SignUp />}></Route>
        <Route path='/Solutions' element={<Solutions />}></Route>
        <Route path='/Login' element={<Login />}></Route>

      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
