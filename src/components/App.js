import React from 'react';
import '../styles/App.css';
import { BrowserRouter, BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import Login from './Login/Login';
import Checkout from './Checkout/Checkout';
import Payment from './Payment/Payment';


function App() {
  return (
    <BrowserRouter>
     <div id='main'>
      <Header/>
       <Routes>
        <Route path='/' element={<Home/>}></Route>
          <Route path='/checkout' element={<Checkout/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/payment' element={<Payment/>}></Route>
       </Routes>
     </div>
    </BrowserRouter>

  );
}


export default App;