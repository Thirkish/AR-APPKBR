import React from 'react';
import { MapPin, Bot, Layout } from 'lucide-react';
import FeatureCard from './FeatureCard';

interface Feature {
  icon: typeof MapPin;
  title: string;
  description: string;
}

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      icon: MapPin,
      title: "Location",
      description: "Near the entrance of 'Mars conference hall' to experience the app."
    },
    {
      icon: Bot,
      title: "Scifi Bot",
      description: "Enjoy an interactive experience guided by a sci-fi bot that leads you through the AR demo."
    },
    {
      icon: Layout,
      title: "UI/UX",
      description: "Get a smooth, user-friendly walkthrough of the Mass Transfer Column in AR."
    }
  ];

  return (
    <section className="py-20 relative bg-gray-950" id="features">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#3b0764_0%,_transparent_60%)] opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#083344_0%,_transparent_50%)] opacity-30"></div>
      
      {/* Top and bottom fades for smooth transitions */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-950 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="inline-block text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300">
            Redefining How You Learn
          </h2>
          <p className="text-gray-300 text-lg">
            Experience an innovative approach to understanding mass transfer operations through augmented reality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;