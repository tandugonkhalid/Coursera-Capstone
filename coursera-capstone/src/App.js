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
        <Link to="/reservations" className="nav-item">Reservations</Link>
	    </nav>
      <UserProvider>
        <Routes> 
            <Route path="/" element={<Main />}></Route>
            <Route path="/reservations" element={<Reservations />}></Route>
        </Routes>
      </UserProvider>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
