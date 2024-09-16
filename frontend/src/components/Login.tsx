import React from 'react';

const Login: React.FC = () => {
  return (
    <div className="mx-auto my-20 p-10 max-w-md">
      <h2 className="text-2xl font-bold text-center mb-6">Admin</h2>
      <input
        className="shadow-md appearance-none border border-black rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
        id="username"
        type="text"
        placeholder="Username"
      />
      <input
        className="shadow-md appearance-none border border-black rounded w-full py-3 px-4 text-gray-700 mb-6 leading-tight focus:outline-none focus:shadow-outline"
        id="password"
        type="password"
        placeholder="Password"
      />
      <button
        className="bg-black text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        type="button"
      >
        Login
      </button>
    </div>
  );
};

export default Login;

