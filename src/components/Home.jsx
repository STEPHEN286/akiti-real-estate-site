import { properties, heroImages } from '../data/dummyData';
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
      <section 
        className="h-[80vh] bg-center bg-cover flex items-center justify-start text-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImages.home})`
        }}
      >
        <div className=" flex items-start justify-start flex-col w-full px-8">
          <h1 className="text-5xl mb-4">Find Your Dream Home</h1>
          <p className="text-xl mb-8">Discover the perfect property that matches your lifestyle</p>
          <SearchCard onSearch={handleSearch} />
        </div>
      </section>

      <PropertyOptions />
      <Testimonials />

      <section className="py-16 px-[5%]">
        <h2 className="text-4xl text-center mb-8 text-gray-800">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.slice(0, 3).map(property => (
            <div key={property.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:-translate-y-2 transition-transform duration-300">
              <img src={property.image} alt={property.title} className="w-full h-[200px] object-cover" />
              <div className="p-6">
                <h3 className="text-xl mb-2 text-gray-800">{property.title}</h3>
                <p className="text-gray-600 mb-2">{property.location}</p>
                <p className="text-xl font-bold text-blue-600 mb-4">${property.price.toLocaleString()}</p>
                <div className="flex gap-4 text-gray-600 text-sm">
                  <span>{property.beds} Beds</span>
                  <span>{property.baths} Baths</span>
                  <span>{property.sqft} sqft</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

     <img src={bg} alt={bg} className="w-full h-[400px] object-cover"/>  
      <GetStarted />
    
    </div>
  );
};

export default Home; 