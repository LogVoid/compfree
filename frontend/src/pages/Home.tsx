import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Catalogue from '../components/Catalogue';
import { ProductItem } from '../interfaces/ProductItem';

const Home: React.FC = () => {
  const [products, setProducts] = useState<ProductItem[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const backendUrl = import.meta.env.VITE_BACKEND_URL;
        const response = await fetch(`${backendUrl}/api/v1/products`);
        const data = await response.json();
        if (data.products) {
          setProducts(data.products);
        }
      } catch (err) {
        console.error('Error fetching products: ', err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <Navbar />
        <div className="mt-10 md:mt-16 lg:mt-20">
          <Catalogue products={products} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
