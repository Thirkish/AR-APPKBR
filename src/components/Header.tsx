import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-200 hover:text-purple-400 transition-colors">
              Features
            </a>
            <a href="#installation" className="text-gray-200 hover:text-purple-400 transition-colors">
              Installation
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center text-gray-300 hover:text-white">
              <Globe size={16} className="mr-1" />
              <span className="text-sm">EN</span>
            </div>
            <a href="https://github.com/Abishekraja28/MTCXR/releases/download/App/MTCXR.apk"
  className="hidden md:flex bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white font-medium px-4 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
>
  Download Now
</a>
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-200 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-gray-900 shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        } overflow-hidden`}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a 
            href="#features" 
            className="text-gray-200 hover:text-purple-400 py-2 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </a>
         
          <a 
            href="#installation" 
            className="text-gray-200 hover:text-purple-400 py-2 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Installation
          </a>
          <a href="https://github.com/Abishekraja28/MTCXR/releases/download/App/MTCXR.apk"
  className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-medium px-4 py-2 rounded-full text-center shadow-lg my-2"
  onClick={() => setIsMenuOpen(false)}
>
  Download Now
</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;