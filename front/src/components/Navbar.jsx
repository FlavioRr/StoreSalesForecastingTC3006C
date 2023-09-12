import React from 'react';
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();
  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-blue-600 to-blue-800 p-4 sticky top-0 z-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white text-2xl font-bold">Store Sales Forecasting</div>
          <ul className="flex space-x-6">
            <li>
              <a
                className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
				onClick={() => {
					navigate('/ProjectInfo');
				}}
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
				onClick={() => {
					navigate('/About-us');
				}}
              >
                Acerca de Nosotros
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
