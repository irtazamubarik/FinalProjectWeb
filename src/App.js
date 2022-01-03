import Background from './Images/background.jpeg';
import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Services from './Components/Services';
import Contact from './Components/Contact';
import About from './Components/About';
import Products from './Components/Products';
import ProductForm from "./Components/ProductsForm";
function App() {
  return (
    <div class="bg_image"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundPosition: 'center',
          backgroundSize: "cover",
           backgroundrepeat: "no-repeat",
          backgroundAttachment: "fixed",
          minHeight: "100%",
          minWidth: "1024px",
          height: "1400px",
          //position: "fixed",
          top: "0",
          left: "0",
          width: '100%',
        }}>
    <div>
      <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/about" element={<About />}/>
      <Route exact path="/services" element={<Services />}/>
      <Route exact path="/contact" element={<Contact />}/>
      <Route exact path="/products" element={<Products />}/>
      <Route path="/products/create" element={<ProductForm />} />
      <Route path="/products/edit/:id" element={<ProductForm />} />
      <Route path="*" element={<Navigate to ="/" />}/>

    </Routes>
    </div>
    </div>
  );
}

export default App;
