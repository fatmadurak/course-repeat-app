import React from 'react'
import { useQuery } from 'react-query'
import  getAllProduct  from '../../network/Requests/Product'

function ProductList() {
  const { isLoading, error, data } = useQuery('products', getAllProduct);

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  
  data.map((product) => {
    console.log(product);
    return null; 
  });

  return (
    <div>productList</div>
  );
}