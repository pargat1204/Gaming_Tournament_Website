import './App.css';
import React from 'react';
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Home from './components/Home';
import Searchbox from './components/Searchbox';


function App() {
  return (
    <div>
      <Header/>
      <Searchbox/>
      <Router>
        <Routes>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/signin' element={<Signin/>}></Route>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
