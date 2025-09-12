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
      <section className="bg-light py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Find Your Dream Home in Ghana
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover the perfect property across Accra, Kumasi, and beyond
          </p>
          <div className="max-w-2xl mx-auto">
            <SearchCard onSearch={handleSearch} />
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Featured Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {properties.slice(0, 3).map(property => (
              <div key={property.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {property.title}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    {property.location}
                  </p>
                  <p className="text-2xl font-bold text-primary mb-4">
                    GHS {property.price.toLocaleString()}
                  </p>
                  <div className="flex gap-4 text-gray-600 text-sm">
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

      {/* Get Started Section */}
      <div className="py-16 bg-light">
        <GetStarted />
      </div>
    </div>
  );
};

export default Home; 