import React from 'react';
import { useQuery } from 'react-query';
import { getProducts } from '../../network/requests/ProductServices';
import { Link } from 'react-router-dom';


function ProductList() {

  
  const { isLoading, error, data } = useQuery('products', getProducts);

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  if (data) {
    return (
      <div>
   
        <ul>
          {data.map((item) => (
           <Link to={`/products/${item.id}`} key={item.id}> <li >{item.title}</li></Link>
          ))}
        </ul>
      </div>
    );
  }

  return null; 
}

export default ProductList;