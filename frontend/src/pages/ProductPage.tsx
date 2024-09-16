import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ProductItem } from '../interfaces/ProductItem';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductItem>();
  const [loading, setLoading] = useState<boolean>(true);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const imgUrl = `${backendUrl}/api/v1/products/${id}/image`;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const backendUrl = import.meta.env.VITE_BACKEND_URL;
        const response = await fetch(`${backendUrl}/api/v1/products/${id}`);
        const data = await response.json();
        if (data.product) {
          setProduct(data.product);
        }
      } catch (err) {
        console.error('Error fetching product: ', err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <Navbar />
        <div className="mt-10 md:mt-16 lg:mt-20">
          <div className="flex flex-col md:flex-row max-w-4xl mx-auto p-4">
            <div className="md:w-1/2 mb-4 md:mb-0">
              {product?.img ? (
                <img src={imgUrl} alt={product?.name} className="w-full h-auto object-cover rounded-lg" />
              ) : (
                <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">No Image Available</span>
                </div>
              )}
            </div>

            <div className="md:w-1/2 md:pl-8">
              {loading ? (
                <p>Loading...</p>
              ) : (
                <>
                  <h1 className="text-2xl font-bold mb-2">{product?.name || 'Product not found'}</h1>
                  <p className="text-lg text-gray-700 mb-4">Product ID: {product?.id || 'N/A'}</p>
                  <p className="text-xl font-semibold text-green-600 mb-4">Price: ${product ? product.price.toFixed(2) : 'N/A'}</p>
                  {product?.description && <p className="text-gray-600 mb-4">{product.description}</p>}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;

