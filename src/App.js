import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Course from './components/Course';
import Facilities from './components/Facilities';
import Testimonial from './components/Testimonial';
import Banner from './components/Banner';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Course />
      <Facilities />
      <Testimonial />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;