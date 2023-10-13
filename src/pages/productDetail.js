import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getByProductId } from '../network/requests/ProductServices';

function ProductDetail() {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery(['product', id], () => getByProductId(id));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error has occurred: {error.message}</div>;
  }

  const product = data;

  return (
    <div>
      <h2>Product Detail</h2>
      <p>Name: {product.name}</p>
    </div>
  );
}

export default ProductDetail;
