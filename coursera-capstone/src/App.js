import React, { useState } from 'react';
import Logo from './/assets/Logo.svg';
import Main from './components/Main'
import Card from './components/Card'
import Reservations from './components/Reservations'
import Menu from './components/Menu';
import Footer from './components/Footer'
import { Routes, Route, Link } from "react-router-dom";
import './App.css';

function App() {

const [bookingTime, setBookingTime] = useState();

  return (
    <div className="App">
      <nav>
        <img src={Logo} alt=""/>
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/about" className="nav-item">About</Link>
        <Link to="/menu" className="nav-item">Menu</Link>
        <Link to="/reservations" className="nav-item">Reservations</Link>
        <Link to="/onlineorder" className="nav-item">Order Online</Link>
        <Link to="/login" className="nav-item">Login</Link>
	    </nav>
      <Routes> 
        <Route path="/" element={<Main bookingTime={bookingTime} setBookingTime={setBookingTime}/>}></Route>
        <Route path="/about" element={"<AboutLittleLemon bookingTime={bookingTime} setBookingTime={setBookingTime} />"}></Route>
        <Route path="/menu" element={<Menu bookingTime={bookingTime} setBookingTime={setBookingTime}/>}></Route>
        <Route path="/reservations" element={<Reservations bookingTime={bookingTime} setBookingTime={setBookingTime} />}></Route>
        <Route path="/onlineorder" element={"<OnlineOrder bookingTime={bookingTime} setBookingTime={setBookingTime} />"}></Route>
        <Route path="/login" element={"<Login bookingTime={bookingTime} setBookingTime={setBookingTime} />"}></Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
