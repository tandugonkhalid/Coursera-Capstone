import '../index.css';
import bgimage from '../assets/greek salad.jpg';
import bgimage1 from '../assets/bruchetta.svg';
import bgimage2 from '../assets/lemon dessert.jpg';

function Card(){
    return(
        <div id="card">
            <div id="card-header">
                <h1>This weeks specials!</h1> 
                <div id='reserve-btn'>
                    <a href="Menu">Online Menu</a>
                </div>
            </div>
            <div id="card-body">
                <img src={bgimage} alt="background-image" />
                <div id="card-title"> 
                    <h6>Greek Salad</h6>
                    <p>$ 12.99</p>
                </div>
                <p>
                    The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, 
                    garnished with crucnhy garlic and rosemary croutons.
                </p>
                <a href="Delivery">Order a delivery</a>
            </div>
            <div id="card-body">
                <img src={bgimage1} alt="background-image" />
                <div id="card-title"> 
                    <h6>Bruschetta</h6>
                    <p>$ 5.99</p>
                </div>
                <p>
                    Our Bruschetta is made from grilled bread that has been semared with garlic and seasoned with salt and olive oil.
                </p>
                <a href="Delivery">Order a delivery</a>
            </div>
            <div id="card-body">
                <img src={bgimage2} alt="background-image" />
                <div id="card-title"> 
                    <h6>Lemon Dessert</h6>
                    <p>$ 5.00</p>
                </div>
                <p>
                    This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                </p>
                <div><a href="Delivery">Order a delivery</a> </div>
            </div>
        </div>
    );
}

export default Card;