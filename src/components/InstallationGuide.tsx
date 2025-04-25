import React from 'react';
import { Download, Shield, Smartphone, Notebook } from 'lucide-react';

interface Step {
  number: number;
  icon: React.ElementType;
  title: string;
  description: string;
}

const InstallationGuide: React.FC = () => {
  const steps: Step[] = [
    {
      number: 1,
      icon: Download,
      title: "Download APK",
      description: "Download the Android APK file directly from this page or scan the QR code with your mobile device."
    },
    {
      number: 2,
      icon: Shield,
      title: "Enable Installation",
      description: "Go to Settings > Security and enable 'Install from Unknown Sources' to allow APK installation."
    },
    {
      number: 3,
      icon: Smartphone,
      title: "Install App",
      description: "Open the downloaded APK file and follow the Android installation prompts to complete setup."
    },
    {
      number: 4,
      icon: Notebook,
      title: "Meet Your Guide",
      description: "Launch the app and meet your sci-fi bot guide who will walk you through the Mass Transfer Column."
    }
  ];

  return (
    <section className="py-20 relative bg-gray-950" id="installation">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#3b0764_0%,_transparent_60%)] opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#083344_0%,_transparent_50%)] opacity-30"></div>
      
      {/* Top fade for smooth transition */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-950 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="inline-block text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300">
            Installation Guide
          </h2>
          <p className="text-gray-300 text-lg">
            Follow these simple steps to install and start exploring the Mass Transfer Column in augmented reality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Step number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm z-10">
                {step.number}
              </div>
              
              <div className="bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5 group h-full">
                <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-lg mb-6 group-hover:from-purple-600/30 group-hover:to-cyan-600/30 transition-all duration-300">
                  {React.createElement(step.icon, { 
                    size: 24, 
                    className: "text-purple-400 group-hover:text-purple-300 transition-colors" 
                  })}
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
                
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstallationGuide;