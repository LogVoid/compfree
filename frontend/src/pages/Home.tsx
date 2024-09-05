import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <Navbar />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
