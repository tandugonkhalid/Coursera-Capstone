import '../index.css';
import bgimage from '../assets/restauranfood.jpg';

function Main() {
return (
        <main>
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
                    <a href="">Reserve a table</a>
                </div>
            </div>
            <div id='bg-main-right'>
                <img src={bgimage} alt="background-image" />
            </div>
        </main>
);

}

export default Main;