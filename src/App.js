import React from 'react';
import { motion } from 'framer-motion';
import './landing.scss'
import Navbar from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Social from './components/Social/Social';
import About from './components/About/About';
import ChooseUs from './components/WhyUs/Choose';
import Contact from './components/Contact/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (

    <motion.div initial='initial' animate='animate'>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <About />
      <ChooseUs />
      <Social />
      <Contact />
      <Footer />
    </motion.div>
  )
}

export default App;
