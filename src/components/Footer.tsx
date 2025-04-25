import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Logo />
            <p className="mt-4 text-gray-400 text-sm">
              Transforming how you see and interact with the world through cutting-edge augmented reality technology.
            </p>
            <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Blog</a></li>
            </ul>
          </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Developer API</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">GDPR Compliance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} ARVision. All rights reserved.
          </p>
          
          </div>
      </div>
    </footer>
  );
};

export default Footer;