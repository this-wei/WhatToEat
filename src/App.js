import './App.css';
import Navbar from './components/Navbar/Navbar.js'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home.js'
import About from './pages/About.js';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Results from './pages/Results';

const App = () => {
  return (
    <>
    <Router>
    <Navbar />
      <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="signup" element={<Signup />}></Route>
          <Route path="results" element={<Results />}></Route>
          </Routes>
    </Router>
    </>
  )
}


export default App;
