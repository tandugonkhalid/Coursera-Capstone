import React, { useState } from 'react'
import bgimage from '../assets/greek salad.jpg';
import bgimage1 from '../assets/bruchetta.svg';
import bgimage2 from '../assets/lemon dessert.jpg';

const size = {
    width: "50%",
    height: "50%",
    overflow: "hidden",
    margin: "0 auto"
}

function Menu({bookingTime, setBookingTime}){

    return(
        <section>
            <h1>Specials</h1>
            <div class="menu-item">
                <div class="menu-desc">
                    <div class="menu-title">
                        <h4>Greek Salad</h4>
                        <p>$ 12.99</p>
                    </div>
                     <p class="card-desc">
                        The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, 
                        garnished with crucnhy garlic and rosemary croutons.
                    </p>
                </div>
                <img class="card-img" src={bgimage} alt="background-image" style={size} />
            </div>
            <div class="menu-item">
                <div class="menu-desc">
                    <div class="menu-title">
                        <h4>Bruschetta</h4>
                        <p>$ 5.99</p>
                    </div>
                     <p class="card-desc">
                        Our Bruschetta is made from grilled bread that has been semared with garlic and seasoned with salt and olive oil.
                    </p>
                </div>
                <img class="card-img" src={bgimage1} alt="background-image" style={size} />
            </div>
            <div class="menu-item">
                <div class="menu-desc">
                    <div class="menu-title">
                        <h4>Lemon Dessert</h4>
                        <p>$ 5.00</p>
                    </div>
                     <p class="card-desc">
                        This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                    </p>
                </div>
                <img class="card-img" src={bgimage2} alt="background-image" style={size} />
            </div>
        </section>
    );
}

export default Menu;
