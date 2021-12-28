import './App.css';
import Navbar from './components/Navbar/Navbar.js'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.js'
import About from './pages/About.js';
import Signup from './pages/Signup';
import Login from './pages/Login';
import FoodLocations from './pages/FoodLocations';

function App() {
  return (
    <div className="App">
    <Router>
       <Navbar />
       <Routes>
         <Route path="home" element={<Home />}></Route>
         <Route path="about" element={<FoodLocations />}></Route>
         <Route path="login" element={<Login />}></Route>
         <Route path="signup" element={<Signup />}></Route>
       </Routes>
     </Router>'
    </div>
  );
}

export default App;
