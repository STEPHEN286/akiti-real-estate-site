import { properties } from '../data/dummyData';
import SearchCard from './SearchCard';
import PropertyOptions from './PropertyOptions';
import Testimonials from './Testimonials';
import GetStarted from './GetStarted';
import bg from "../assets/images/pexels-binyaminmellish-106399.jpg"

const Home = () => {
  const handleSearch = (searchData) => {
    // Handle search functionality here
    console.log('Search data:', searchData);
  };

  return (
    <div className="mt-[70px]">
      {/* Hero Section */}
      <section 
        className="min-h-[60vh] md:h-[80vh] bg-center bg-cover flex items-center justify-start text-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bg})`
        }}
      >
        <div className="container mx-auto px-4 md:px-8 py-8 md:py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Find Your Dream Home
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
              Discover the perfect property that matches your lifestyle
            </p>
            <div className="w-full max-w-2xl mx-auto">
              <SearchCard onSearch={handleSearch} />
            </div>
          </div>
        </div>
      </section>

      {/* Property Options Section */}
      <div className="py-8 md:py-12">
        <PropertyOptions />
      </div>

      {/* Testimonials Section */}
      <div className="py-8 md:py-12 bg-gray-50">
        <Testimonials />
      </div>

      {/* Featured Properties Section */}
      <section className="py-12 md:py-16 px-4 md:px-[5%]">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
            Featured Properties
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {properties.slice(0, 3).map(property => (
              <div 
                key={property.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="relative h-[200px] md:h-[250px]">
                  <img 
                    src={property.image} 
                    alt={property.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">
                    {property.title}
                  </h3>
                  <p className="text-gray-600 mb-2 text-sm md:text-base">
                    {property.location}
                  </p>
                  <p className="text-lg md:text-xl font-bold text-blue-600 mb-4">
                    ${property.price.toLocaleString()}
                  </p>
                  <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
                    <span>{property.beds} Beds</span>
                    <span>{property.baths} Baths</span>
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Background Image Section */}
      <div className="relative h-[300px] md:h-[400px]">
        <img 
          src={bg} 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Get Started Section */}
      <div className="py-12 md:py-16">
        <GetStarted />
      </div>
    </div>
  );
};

export default Home; 