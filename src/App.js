
import './App.css';
import React from 'react'
import { Routes,Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from "./pages/product/ProductList";


function App() {
  return (
 
    <>

<ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="products">productList</Link></li>

  </ul>
   <Routes>

 
   
   <Route path='/'  element={<Home/>}/>
   <Route path='products' element={<ProductList/>}/>

   </Routes>
    
    
   </> 
  );
}

export default App;
