import React from 'react';

const AllProducts = ({ products, onProductClick }) => {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id} onClick={() => onProductClick(product.id)}>
          {product.name}
        </li>
      ))}
    </ul>
  );
};

export default AllProducts;