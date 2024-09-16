import React from 'react';
import { Link } from 'react-router-dom';
import { ProductItem } from '../interfaces/ProductItem';

const Product: React.FC<ProductItem> = ({id, name, description, img, price}) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const imgUrl = `${backendUrl}/api/v1/products/${id}/image`;

  return (
    <Link to={`/product/${id}`} className="border rounded-lg p-4 shadow-md">
      <img src={imgUrl} alt="Logo"/>
      <div>
        <h2 className="text-xl font-bold">
          {name}
        </h2>
        <p className="text-gray-700">
          Price: {price.toFixed(2)} €
        </p>
      </div>
    </Link>
  );
};

export default Product;
