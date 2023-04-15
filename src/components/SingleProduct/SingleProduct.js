import React from 'react';
import { useParams } from 'react-router-dom';

const SingleProduct = ({ products }) => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === Number(productId));

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
};

export default SingleProduct;
