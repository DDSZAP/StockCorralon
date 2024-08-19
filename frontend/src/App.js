import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/Navbar.jsx';
import Home from './Components/Home/Home.jsx';
import Footer from './Components/Footer/Footer.jsx';
import { Route, Routes } from 'react-router-dom';
import Item from './Components/Item/Item.jsx';

export default function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/*' element={<Home />} />
        <Route exact path='/Items' element={<Item />} />
      </Routes>
      <Footer/>
    </div>
  );
}

