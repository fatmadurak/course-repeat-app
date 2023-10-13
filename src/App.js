
import './App.css';
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import ProductList from './pages/product/ProductList';
import ProductDetail from './pages/productDetail';
import Navbar from './components/Navbar/index';

function App() {
  return (
    <>
 
    <Navbar/>
    <div className='container'>
      <Routes>
  
        <Route path='/' element={<ProductList/>} />
        <Route path='/products/:id' element={<ProductDetail />} />
      </Routes>
    </div>
   
    </>
  );
}

export default App;
