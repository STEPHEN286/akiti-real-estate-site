import { useParams } from 'react-router-dom';
import { properties } from '../data/dummyData';
import { MapPin, BedDouble, Bath, Square, Calendar, Building2, DollarSign } from 'lucide-react';
import { useState } from 'react';

const PropertyDetails = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === Number(id));
  const [selectedImage, setSelectedImage] = useState(property?.images?.[0] || '');

  if (!property) {
    return (
      <div className="mt-[70px] min-h-screen flex items-center justify-center">
        <p className="text-2xl text-gray-600">Property not found</p>
      </div>
    );
  }

  return (
    <div className="mt-[70px]">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{property.title}</h1>
            <div className="flex items-center justify-center gap-4 text-lg">
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                {property.location}
              </span>
              <span className="flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                GHS {property.price.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 px-[5%] bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Property Gallery</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <img 
                src={selectedImage} 
                alt={property.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {property.images?.map((image, index) => (
                <div 
                  key={index} 
                  onClick={() => setSelectedImage(image)}
                  className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                    selectedImage === image ? 'ring-2 ring-black' : 'hover:ring-2 hover:ring-gray-300'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${property.title} - Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-16 px-[5%]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                { icon: <BedDouble className="w-6 h-6 text-black" />, label: "Bedrooms", value: property.beds },
                { icon: <Bath className="w-6 h-6 text-black" />, label: "Bathrooms", value: property.baths },
                { icon: <Square className="w-6 h-6 text-black" />, label: "Area", value: `${property.sqft} sqft` },
                { icon: <Building2 className="w-6 h-6 text-black" />, label: "Type", value: property.type }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  {item.icon}
                  <div>
                    <p className="text-sm text-gray-600">{item.label}</p>
                    <p className="font-semibold">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <p className="text-gray-600 leading-relaxed">
                {property.description || `Welcome to ${property.title}, a stunning ${property.type} located in ${property.location}. 
                This beautiful property features ${property.beds} spacious bedrooms, ${property.baths} modern bathrooms, 
                and ${property.sqft} square feet of living space. Perfect for families looking for comfort and style.`}
              </p>
            </div>

            {/* Features */}
            {property.features && property.features.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Features</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {property.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <span className="w-2 h-2 bg-black rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-8 rounded-lg sticky top-[90px]">
              <h2 className="text-2xl font-bold mb-6">Contact Agent</h2>
              <form className="space-y-4">
                {["Name", "Email", "Phone"].map((field, index) => (
                  <div key={index}>
                    <label htmlFor={field.toLowerCase()} className="block mb-2 text-gray-700">
                      {field}
                    </label>
                    <input
                      type={field === "Email" ? "email" : field === "Phone" ? "tel" : "text"}
                      id={field.toLowerCase()}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                      required
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="block mb-2 text-gray-700">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyDetails;
