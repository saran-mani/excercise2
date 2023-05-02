import { Route, Routes ,BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import { Home } from './Home/Home';
import Nav from './Navbar.jsx/Excersice';
import Footer from './Navbar.jsx/Footer';
import Navbar from './Navbar.jsx/Navbar';
function App() {
  return (
    <>
    <Navbar/>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
