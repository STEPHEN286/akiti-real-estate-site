import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16 px-[5%]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div>
          <h3 className="text-xl mb-6">About Us</h3>
          <p className="text-gray-300 leading-relaxed">
            Akiti Real Estate is your trusted partner in finding the perfect property.
            We provide exceptional service and expertise in the real estate market.
          </p>
        </div>

        <div>
          <h3 className="text-xl mb-6">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/properties" className="text-gray-300 hover:text-white transition-colors duration-300">
                Properties
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl mb-6">Contact Info</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-gray-300">
              <i className="fas fa-map-marker-alt text-white"></i>
              123 Real Estate Street, City, State 12345
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <i className="fas fa-phone text-white"></i>
              +1 (555) 123-4567
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <i className="fas fa-envelope text-white"></i>
              info@akiti-realestate.com
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl mb-6">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300 text-2xl">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300 text-2xl">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300 text-2xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300 text-2xl">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center pt-8 border-t border-gray-700">
        <p className="text-gray-300 text-sm">
          &copy; {new Date().getFullYear()} Akiti Real Estate. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 