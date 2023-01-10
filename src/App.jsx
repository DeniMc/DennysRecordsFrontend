import { useState } from 'react'
import Navbar from './components/header/Navbar.jsx';
import { Routes, Route, Link } from 'react-router-dom';
import Products from './components/body/Products.jsx';
import AddProduct from './components/body/AddProduct.jsx';
import Home from './components/body/Home.jsx';
import About from './components/body/About.jsx';
import ContactUs from "./components/body/ContactUs.jsx";
import Carousel from './components/body/small_components/Carousel.jsx';

function App() {

  return (
    
    <div className="App">
      <Navbar />
      <Carousel />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/list" element={<Products />} />
        <Route path="/products/add" element={<AddProduct />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </div>
    
  )
}

export default App
