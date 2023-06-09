import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ThemeProvider from './contexts/ThemeProvider';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import AboutPage from './components/About/AboutPage';
import Slideshow from './components/Slideshow/Slideshow';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import MerchPage from './components/Merch/MerchPage';
import ContactUsPage from './components/ContactUs/ContactUsPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Slideshow />
                <ContactUs />
              </>
            } />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/Merch" element={<MerchPage />} />
            <Route path="/contactus" element={<ContactUsPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;


