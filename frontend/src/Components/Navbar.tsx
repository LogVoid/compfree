import React from 'react';
import SearchField from './SearchField';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full bg-black text-white p-4">
      <div className="flex items-center">
        <h1>Compfree</h1>
	<div className="flex-grow flex justify-center">
	  <SearchField/>
	</div>
	<div className="flex flex-end">
	  <button className="py-2 px-4">
	    <img src="/cart-icon.svg" alt="Cart Button" className="w-5 h-5 mr-2"/> 
	  </button>
	</div>
      </div>
    </nav>
  );
};

export default Navbar;
