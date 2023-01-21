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

    
     <div id='main'>
      <BrowserRouter>
      <Header/>
       <Routes>
        <Route exact path="/" element={<Home/>}/>
          <Route exact path="/checkout" element={<Checkout/>}/>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/payment' element={<Payment/>}></Route>
       </Routes>
       </BrowserRouter>
     </div>
   

  );
}


export default App;