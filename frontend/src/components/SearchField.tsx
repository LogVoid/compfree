import React from 'react';

const SearchField: React.FC = () => {
  return (
    <div className="flex justify-center">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <img src="/search-icon.svg" alt="Search Button" className="w-5 h-5 mr-2"/>
      </button>
      <input className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight" type="text" placeholder="Search..."/>
    </div>
  );
};

export default SearchField;
