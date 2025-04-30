import React, { useEffect, useRef } from 'react';
import { Download } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import myImage from '../Images/img.jpg';

const APK_URL = 'https://github.com/Abishekraja28/MTCXR/releases/download/App/MTCXR.apk';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      const mockup = heroRef.current.querySelector('.mockup-container') as HTMLElement;
      const spheres = heroRef.current.querySelectorAll('.floating-sphere') as NodeListOf<HTMLElement>;
      
      if (mockup) {
        mockup.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
      }
      
      spheres.forEach((sphere, index) => {
        const speed = index % 2 === 0 ? 2 : 3;
        sphere.style.transform = `translate(${x * speed * 30}px, ${y * speed * 30}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen pt-28 pb-20 overflow-hidden flex items-center bg-gray-950" 
      id="hero"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#3b0764_0%,_transparent_50%)] opacity-40"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#083344_0%,_transparent_50%)] opacity-40"></div>
      
      {/* Floating spheres */}
      <div className="floating-sphere absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-purple-600/10 to-cyan-600/10 blur-3xl transition-transform duration-300 ease-out"></div>
      <div className="floating-sphere absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-gradient-to-br from-cyan-600/10 to-purple-600/10 blur-3xl transition-transform duration-300 ease-out"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLW9wYWNpdHk9Ii4xIiBjeD0iMTAiIGN5PSIxMCIgcj0iOSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      {/* Bottom fade for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300">
                Mass Transfer Column
              </span>
              <br />
              <span>Interactive AR Experience</span>
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
              Explore the intricacies of mass transfer operations through an immersive AR demonstration.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              {/* Updated Download Button */}
              <a 
                href={APK_URL}
                className="group relative bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/25 flex items-center"
              >
                {/* Background trigger */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl opacity-80"></div>

                <div className="relative z-10 text-left">
                  <div className="text-sm opacity-90">Android APK</div>
                  <div className="font-semibold">Download Now</div>
                </div>
              </a>

              <div className="bg-white p-3 rounded-xl">
                <QRCodeSVG 
                  value={APK_URL}
                  size={96}
                  level="H"
                />
              </div>
            </div>
          </div>
          
          <div className="flex-1 mockup-container transition-transform duration-300 ease-out">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 p-1">
                <div className="relative rounded-xl overflow-hidden">
                  <img 
                    src={myImage}
                    alt="Mass Transfer Column AR Demo" 
                    className="w-full aspect-[4/3] object-cover"
                  />
                  
                  {/* Holographic overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/30 via-transparent to-cyan-500/30 mix-blend-overlay"></div>
                  
                  {/* Content overlay */}
                  <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent">
                    <div className="w-full">
                      <h3 className="text-2xl font-bold text-white mb-2">Interactive Learning</h3>
                      <p className="text-gray-200 text-sm max-w-md">
                        Let our sci-fi bot take you through an immersive tour of mass transfer operations.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Animated border gradient */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-600 via-cyan-500 to-purple-600 rounded-2xl -z-10 animate-[gradient_2s_linear_infinite] bg-[length:200%_100%]"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-purple-600/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-cyan-600/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
  