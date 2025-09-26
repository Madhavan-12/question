// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    // <nav className="bg-blue-600 p-4 text-white flex justify-between">
    //   <h1 className="font-bold text-xl hover:text-amber-200">MyShop</h1>
    //   <ul className="flex gap-4 hover:text-violet-500">
    //     <li className='hover:text-violet-950'>Home</li>
    //     <li className='hover:text-violet-950'>Component</li>
    //     <li className='hover:text-violet-950'>Rendering</li>
    //     <li className='hover:text-violet-950'>Cooks</li>
    //     <li className='hover:text-violet-950'>Product</li>
    //   </ul>
    // </nav>
 <div className="bg-amber-50 text-black w-full flex justify-around h-25 items-center px-3 py-5 shadow-md"> 
   <h3>Mycode</h3>
     <div className="flex gap-4">
            <Link to="/" className="hover:text-blue to-sky-600" >Banner</Link>
            <Link to="/Fibonacci" className="hover:text-blue 600">Fibbonacci</Link>
             <Link to="/Count" className="hover:text-blue 600">Count</Link>
     </div>
    

</div>
  );
 
};

export default Navbar;
