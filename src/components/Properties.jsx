import { useState } from 'react';
import { Link } from 'react-router-dom';
import { properties } from '../data/dummyData';

const Properties = () => {
  const [filterType, setFilterType] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const filteredProperties = properties.filter(property => {
    if (filterType !== 'all' && property.type !== filterType) return false;
    if (priceRange !== 'all') {
      const price = property.price;
      switch (priceRange) {
        case 'under-200k':
          return price < 200000;
        case '200k-500k':
          return price >= 200000 && price <= 500000;
        case '500k-1m':
          return price > 500000 && price <= 1000000;
        case 'over-1m':
          return price > 1000000;
        default:
          return true;
      }
    }
    return true;
  });

  return (
    <div className="mt-[70px]">
      <section className="h-[40vh] bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&auto=format&fit=crop&q=60')] bg-center bg-cover flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-5xl mb-4">Our Properties</h1>
        <p className="text-xl">Find the perfect property that matches your needs</p>
      </section>

      <section className="py-16 px-[5%]">
        <div className="flex flex-col md:flex-row gap-8 mb-12 p-6 bg-gray-50 rounded-lg">
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
              <option value="under-200k">Under $200k</option>
              <option value="200k-500k">$200k - $500k</option>
              <option value="500k-1m">$500k - $1M</option>
              <option value="over-1m">Over $1M</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map(property => (
            <div key={property.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:-translate-y-2 transition-transform duration-300">
              <img src={property.image} alt={property.title} className="w-full h-[200px] object-cover" />
              <div className="p-6">
                <h3 className="text-xl mb-2 text-gray-800">{property.title}</h3>
                <p className="text-gray-600 mb-2">{property.location}</p>
                <p className="text-xl font-bold text-black mb-4">${property.price.toLocaleString()}</p>
                <div className="flex gap-4 text-gray-600 text-sm mb-4">
                  <span>{property.beds} Beds</span>
                  <span>{property.baths} Baths</span>
                  <span>{property.sqft} sqft</span>
                </div>
                <Link 
                  to={`/property/${property.id}`}
                  className="block w-full bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors duration-300 text-center"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Properties; 