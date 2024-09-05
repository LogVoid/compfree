import React from 'react';
import Product from './Product';
import { ProductItem } from '../interfaces/ProductItem';

interface CatalogueProps {
  products: ProductItem[];
}

const Catalogue: React.FC<CatalogueProps> = ({ products}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Catalogue;
