import Logo from './/assets/Logo.svg';
import Main from './components/Main'
import Card from './components/Card'
import Footer from './components/Footer'
import { Routes, Route, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <img src={Logo} alt=""/>
        <Link to="/App" className="nav-item">Home</Link>
        <Link to="/about" className="nav-item">About</Link>
        <Link to="/menu" className="nav-item">Menu</Link>
        <Link to="/reservations" className="nav-item">Reservations</Link>
        <Link to="/onlineorder" className="nav-item">Order Online</Link>
        <Link to="/login" className="nav-item">Login</Link>
	    </nav>
      <Routes> 
        <Route path="/App" element=""></Route>
        <Route path="/about" element={"<AboutLittleLemon />"}></Route>
        <Route path="/menu" element={"<Menu />"}></Route>
        <Route path="/reservations" element={"<Reservations />"}></Route>
        <Route path="/onlineorder" element={"<OnlineOrder />"}></Route>
        <Route path="/login" element={"<Login />"}></Route>
      </Routes>
      <Main></Main>
      <Card></Card>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
