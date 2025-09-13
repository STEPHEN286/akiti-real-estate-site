import { useState } from 'react';
import { Link } from 'react-router-dom';
import { properties, heroImages } from '../data/dummyData';

const Properties = () => {
  const [filterType, setFilterType] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const filteredProperties = properties.filter(property => {
    if (filterType !== 'all' && property.type !== filterType) return false;
    if (priceRange !== 'all') {
      const price = property.price;
      switch (priceRange) {
        case 'under-1m':
          return price < 1000000;
        case '1m-2m':
          return price >= 1000000 && price <= 2000000;
        case '2m-4m':
          return price > 2000000 && price <= 4000000;
        case 'over-4m':
          return price > 4000000;
        default:
          return true;
      }
    }
    return true;
  });

  return (
    <div className="mt-[70px]">
      {/* Hero Section */}
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImages.properties})` }}
      >
        {/* Orange overlay for better text readability */}
        <div className="absolute inset-0 bg-orange-600/60"></div>
        
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Properties</h1>
          <p className="text-xl text-gray-200">Find the perfect property across Ghana that matches your needs</p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            <div className="flex-1">
              <label className="block mb-2 text-gray-700 font-medium">Property Type</label>
              <select 
                value={filterType} 
                onChange={(e) => setFilterType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700"
              >
                <option value="all">All Types</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="chamber">Chamber & Hall</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block mb-2 text-gray-700 font-medium">Price Range</label>
              <select 
                value={priceRange} 
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700"
              >
                <option value="all">All Prices</option>
                <option value="under-1m">Under GHS 1M</option>
                <option value="1m-2m">GHS 1M - GHS 2M</option>
                <option value="2m-4m">GHS 2M - GHS 4M</option>
                <option value="over-4m">Over GHS 4M</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map(property => (
              <div key={property.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{property.title}</h3>
                  <p className="text-gray-600 mb-3">{property.location}</p>
                  <p className="text-2xl font-bold text-primary mb-4">GHS {property.price.toLocaleString()}</p>
                  <div className="flex gap-4 text-gray-600 text-sm mb-6">
                    <span>{property.beds} Beds</span>
                    <span>{property.baths} Baths</span>
                    <span>{property.sqft} sqft</span>
                  </div>
                  <Link 
                    to={`/property/${property.id}`}
                    className="block w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-center shadow-md"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Properties; 