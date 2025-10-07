import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  React.useEffect(() => {
    // Initialize feather icons after component mounts
    if (window.feather) {
      window.feather.replace();
    }
  }, []);

  return (
    <footer className="bg-gray-800 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <i data-feather="award" className="text-yellow-500 mr-2"></i>
              <span className="text-xl font-bold playfair">BrightStarz Production</span>
            </div>
            <p className="text-gray-400 mb-4">
              Bringing literature to life and important messages to Kenyan youth through professional theater.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1BU1g1bj3u/" className="text-gray-400 hover:text-white">
                <i data-feather="facebook"></i>
              </a>
              <a href="https://x.com/brightstarz_prod" className="text-gray-400 hover:text-white">
                <i data-feather="link"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i data-feather="instagram"></i>
              </a>
              <a href="https://www.youtube.com/@brightstarz-arts" className="text-gray-400 hover:text-white">
                <i data-feather="youtube"></i>
              </a>
              <a href="https://tiktok.com/@brightstarz6" className="text-gray-400 hover:text-white">
                <i data-feather="link"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-white">Gallery</Link></li>
              <li><Link to="/partners" className="text-gray-400 hover:text-white">Partners</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <i data-feather="map-pin" className="mr-2 mt-1"></i>
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-center">
                <i data-feather="phone" className="mr-2"></i>
                <span>+254 700 005399</span>
              </li>
              <li className="flex items-center">
                <i data-feather="mail" className="mr-2"></i>
                <span>info@brightstarzproduction.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2023 BrightStarz Production. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;