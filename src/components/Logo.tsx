import React from 'react';
import { Zap } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="bg-gradient-to-r from-purple-600 to-cyan-500 p-2 rounded-lg mr-2">
        <Zap size={24} className="text-white" />
      </div>
      <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300">
        MTC XR
      </span>
    </div>
  );
};

export default Logo;