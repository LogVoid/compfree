import React from 'react';
import { ProductItem } from '../interfaces/ProductItem';

const Product: React.FC<ProductItem> = ({id, name, description, img, price}) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-bold">
        {name}
      </h2>
      <p className="text-gray-700">
        Price: {price.toFixed(2)} €
      </p>
    </div>
  );
};

export default Product;
