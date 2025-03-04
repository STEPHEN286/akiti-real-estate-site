import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="px-[5%] py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800 no-underline">
          Akiti Real Estate
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/" className="text-gray-600 font-medium hover:text-black transition-colors duration-300 no-underline">
            Home
          </Link>
          <Link to="/about" className="text-gray-600 font-medium hover:text-black transition-colors duration-300 no-underline">
            About
          </Link>
          <Link to="/properties" className="text-gray-600 font-medium hover:text-black transition-colors duration-300 no-underline">
            Properties
          </Link>
          <Link to="/contact" className="text-gray-600 font-medium hover:text-black transition-colors duration-300 no-underline">
            Contact
          </Link>
          
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-gray-800" />
          ) : (
            <Menu className="w-6 h-6 text-gray-800" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-[5%] py-4 bg-white border-t">
          <div className="flex flex-col gap-4">
            <Link 
              to="/" 
              className="text-gray-600 font-medium hover:text-black transition-colors duration-300 no-underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-gray-600 font-medium hover:text-black transition-colors duration-300 no-underline"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/properties" 
              className="text-gray-600 font-medium hover:text-black transition-colors duration-300 no-underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Properties
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-600 font-medium hover:text-black transition-colors duration-300 no-underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 