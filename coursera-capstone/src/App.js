import Logo from './/assets/Logo.svg';
import Main from './components/Main'
import Reservations from './components/Reservations'
import Menu from './components/Menu';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import { UserProvider } from "./context/UserContext";

function App() {
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
      <UserProvider>
        <Routes> 
            <Route path="/" element={<Main />}></Route>
            <Route path="/about" element={"<AboutLittleLemon />"}></Route>
            <Route path="/menu" element={<Menu />}></Route>
            <Route path="/reservations" element={<Reservations />}></Route>
            <Route path="/onlineorder" element={"<OnlineOrder />"}></Route>
            <Route path="/login" element={"<Login />"}></Route>
        </Routes>
      </UserProvider>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
