import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/Navbar.jsx';
import Home from './Components/Home/Home.jsx';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home />
    </div>
  );
}

export default App;