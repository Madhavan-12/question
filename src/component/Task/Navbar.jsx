// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="font-bold text-xl hover:text-amber-200">MyShop</h1>
      <ul className="flex gap-4 hover:text-violet-500">
        <li className='hover:text-violet-950'>Home</li>
        <li className='hover:text-violet-950'>Component</li>
        <li className='hover:text-violet-950'>Rendering</li>
        <li className='hover:text-violet-950'>Cooks</li>
        <li className='hover:text-violet-950'>Product</li>
      </ul>
    </nav>
  );
};

export default Navbar;
