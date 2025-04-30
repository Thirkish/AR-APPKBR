import React from 'react';
import hr from '../Images/Logo.jpeg'; // Importing the image

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="p-2 rounded-lg mr-2">
        <img src={hr} alt="Logo" className="w-10 h-10" />
      </div>
      <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300">
        MTC XR
      </span>
    </div>
  );
};

export default Logo;
