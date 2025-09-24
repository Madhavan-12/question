// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="font-bold text-xl">MyShop</h1>
      <ul className="flex gap-4">
        <li>Home</li>
        <li>Component</li>
        <li>Rendering</li>
        <li>Cooks</li>
        <li>Product</li>
      </ul>
    </nav>
  );
};

export default Navbar;
