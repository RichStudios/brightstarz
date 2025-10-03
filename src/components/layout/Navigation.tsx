import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'auto';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const isActive = (path: string) => location.pathname === path;

  const navLinkClass = (path: string) => 
    `px-3 py-2 font-medium ${
      isActive(path) 
        ? 'text-yellow-600' 
        : 'text-gray-700 hover:text-yellow-600'
    }`;

  const mobileNavLinkClass = (path: string) =>
    `block px-3 py-3 font-medium ${
      isActive(path)
        ? 'text-yellow-600'
        : 'text-gray-700 hover:text-yellow-600'
    }`;

  React.useEffect(() => {
    // Initialize feather icons after component mounts
    if (window.feather) {
      window.feather.replace();
    }
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center">
              <i data-feather="award" className="text-yellow-500 mr-2"></i>
              <span className="text-xl font-bold text-gray-800 playfair">BrightStarz Production</span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <Link to="/" className={navLinkClass('/')}>Home</Link>
                <Link to="/services" className={navLinkClass('/services')}>Services</Link>
                <Link to="/gallery" className={navLinkClass('/gallery')}>Gallery</Link>
                <Link to="/partners" className={navLinkClass('/partners')}>Partners</Link>
                <Link to="/contact" className={navLinkClass('/contact')}>Contact</Link>
              </div>
            </div>
            
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="text-gray-700" 
                aria-label="Toggle menu"
              >
                <i data-feather="menu"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed inset-0 z-50 bg-white transform transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ height: '100vh' }}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center">
            <i data-feather="award" className="text-yellow-500 mr-2"></i>
            <span className="text-xl font-bold text-gray-800 playfair">BrightStarz Production</span>
          </div>
          <button 
            onClick={closeMobileMenu}
            className="text-gray-700" 
            aria-label="Close menu"
          >
            <i data-feather="x"></i>
          </button>
        </div>
        
        <div className="p-4 space-y-4">
          <Link to="/" className={mobileNavLinkClass('/')} onClick={closeMobileMenu}>Home</Link>
          <Link to="/services" className={mobileNavLinkClass('/services')} onClick={closeMobileMenu}>Services</Link>
          <Link to="/gallery" className={mobileNavLinkClass('/gallery')} onClick={closeMobileMenu}>Gallery</Link>
          <Link to="/partners" className={mobileNavLinkClass('/partners')} onClick={closeMobileMenu}>Partners</Link>
          <Link to="/contact" className={mobileNavLinkClass('/contact')} onClick={closeMobileMenu}>Contact</Link>
        </div>
      </div>
    </>
  );
};

// Extend window to include feather
declare global {
  interface Window {
    feather: any;
  }
}

export default Navigation;