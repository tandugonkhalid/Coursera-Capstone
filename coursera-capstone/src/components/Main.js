import React, { useState } from 'react';
import '../index.css';
import { Routes, Route, Link } from "react-router-dom";
import bgimage from '../assets/restauranfood.jpg';
import Card from './Card';

function Main({bookingTime, setBookingTime}) {

return (
        <main>
            <div id='main-banner'>
                <div id='bg-main-left'>
                    <h1>
                        Little Lemon
                    </h1>
                    <h2>
                        Chicago
                    </h2>
                    <p>
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                    <div id='reserve-btn'>
                        <nav>
                             <Link to="/reservations" className="nav-item">Reserve a table</Link>
                        </nav>
                    </div>
                </div>
                <div id='bg-main-right'>
                    <img src={bgimage} alt="background-image" />
                </div>
            </div>
            <Card></Card>
        </main>
);

}

export default Main;