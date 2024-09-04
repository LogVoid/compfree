import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

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
