import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/Navbar.jsx';
import Home from './Components/Home/Home.jsx';
import Footer from './Components/Footer/Footer.jsx';

export default function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home />
      <Footer/>
    </div>
  );
}

