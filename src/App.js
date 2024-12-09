import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Ministries from './pages/Ministries';
import Events from './pages/Events_Prayer';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Donation from './pages/Donation';
import Support from './pages/Support'; // Import Support page
import Volunteer from './pages/Volunteer'; // Import Volunteer page
import LearnMore from './pages/LearnMore'; 
import PrayerRequest from './pages/PrayerRequest';
import Gallery from './pages/Gallery';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './pages/theme';
//import DisciplePage from './pages/DisciplePage'; // Rename this import to DisciplePage

import './index.css';
import './App.css';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
          <Route path="/support" element={<Support />} /> {/* Updated for React Router v6 */}
          <Route path="/donation" element={<Donation />} /> {/* Updated for React Router v6 */}
          <Route path="/volunteer" element={<Volunteer/>}/>
          <Route path="/learnmore" element={<LearnMore />} />
          <Route path="/prayer-request" element={<PrayerRequest />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
      </div>
      <Footer />
      </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;