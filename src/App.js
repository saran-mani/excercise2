import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Home } from "./Home/Home";
// import Nav from './Navbar/Excersice';
// import Footer from './Navbar/Footer';
import Navbar from "./Navbar/Navbar";
import Contact from "./ContactPage/Contact";
function App() {
  return (
    <>
    
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
