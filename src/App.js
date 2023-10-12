
import './App.css';
import React from 'react'
import { Routes,Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from "./pages/product/ProductList";
import ProductDetail from './pages/productDetail';


function App() {
  return (
 
    <>

<ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/products">productList</Link></li>
    <li><Link to="/products/productId">productDetail</Link></li>

  </ul>
   <Routes>

 
   
   <Route path='/'  element={<Home/>}/>
   <Route path='/products' element={<ProductList/>}/>
   <Route path='/products/:id' element={<ProductDetail/>}/>


   </Routes>
    
    
   </> 
  );
}

export default App;
