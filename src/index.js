import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index.jsx';
import Navbar from './pages/Navbar/index.jsx';
import Login from './pages/login/index.jsx';
import SignUp from './pages/SignUp/index.jsx';
import Footer from './pages/Footer/index.jsx';
import Result from './components/Result/index.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path='/test' element={<Result/>}/>
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
);
