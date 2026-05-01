
import React from 'react';
import bgimage from '../assets/greek salad.jpg';
import bgimage1 from '../assets/bruchetta.svg';
import bgimage2 from '../assets/lemon dessert.jpg';
import { Routes, Route, Link } from "react-router-dom";

function Card(){
    return(
        <div>
            <div id="card-header">
                <h1>This weeks specials!</h1> 
                <div id='reserve-btn'>
                    <nav>
                        <Link to="/onlineorder" className="nav-item">Order Online</Link>
                    </nav>
                </div>
            </div>
            <div id="card">
                <div class="card-body">
                    <img class="card-img" src={bgimage} alt="background-image" />
                    <div id="card-title"> 
                        <h4>Greek Salad</h4>
                        <p>$ 12.99</p>
                    </div>
                    <p class="card-desc">
                        The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, 
                        garnished with crucnhy garlic and rosemary croutons.
                    </p>
                    <div class="card-links"><a href="Delivery">Order a delivery</a> </div>
                </div>
                <div class="card-body">
                    <img class="card-img" src={bgimage1} alt="background-image" />
                    <div id="card-title"> 
                        <h4>Bruschetta</h4>
                        <p>$ 5.99</p>
                    </div>
                    <p class="card-desc">
                        Our Bruschetta is made from grilled bread that has been semared with garlic and seasoned with salt and olive oil.
                    </p>
                    <div class="card-links"><a href="Delivery">Order a delivery</a> </div>
                </div>
                <div class="card-body">
                    <img class="card-img" src={bgimage2} alt="background-image" />
                    <div id="card-title"> 
                        <h4>Lemon Dessert</h4>
                        <p>$ 5.00</p>
                    </div>
                    <p class="card-desc">
                        This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                    </p>
                    <div class="card-links"><a href="Delivery">Order a delivery</a> </div>
                </div>
            </div>
        </div>
    );
}

export default Card;