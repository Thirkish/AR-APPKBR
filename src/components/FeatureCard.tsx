import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: typeof LucideIcon
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, delay = 0 }) => {
  return (
    <div 
      className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5 group"
      style={{
        animation: `fadeInUp 0.5s ease-out ${delay}s both`
      }}
    >
      <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-lg mb-6 group-hover:from-purple-600/30 group-hover:to-cyan-600/30 transition-all duration-300">
        <Icon size={24} className="text-purple-400 group-hover:text-purple-300 transition-colors" />
      </div>
      
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;