
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
    <li><Link to="/product_list">productList</Link></li>

  </ul>
   <Routes>

 
   
   <Route path='/' exact element={<Home/>}/>
   <Route path='/product_list' element={<ProductList/>}/>

   </Routes>
    
    
   </> 
  );
}

export default App;
