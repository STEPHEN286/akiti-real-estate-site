import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-[5%] py-4 bg-white shadow-md">
      <div className="navbar-brand">
        <Link to="/" className="text-2xl font-bold text-gray-800 no-underline">
          Akiti Real Estate
        </Link>
      </div>
      <div className="flex gap-8">
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
      
    </nav>
  );
};

export default Navbar; 