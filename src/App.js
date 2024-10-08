import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Ministries from './pages/Ministries';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './index.css';
import './App.css';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className="wrapper">
      <Navbar />
      <div className="container mt-5">
      <div className="content"> {/* Main content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      </div>
      <Footer />
      </div>
    </Router>
  );
}

export default App;