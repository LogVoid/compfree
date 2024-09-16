import React from 'react';
import Footer from '../components/Footer.tsx';
import Login from '../components/Login.tsx';

const Admin: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <Login />
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
