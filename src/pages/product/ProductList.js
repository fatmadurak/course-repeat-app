import React from 'react';
import { useQuery } from 'react-query';
import { getProducts } from '../../network/requests/ProductServices';

function ProductList() {
  const { isLoading, error, data } = useQuery('products', getProducts);

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  if (data) {
    return (
      <div>
        <h1>Product List</h1>
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }

  return null; 
}

export default ProductList;