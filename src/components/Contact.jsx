import { useState } from 'react';
import { heroImages } from '../data/dummyData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="mt-[70px]">
      {/* Hero Section */}
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImages.contact})` }}
      >
        {/* Orange overlay for better text readability */}
        <div className="absolute inset-0 bg-orange-600/60"></div>
        
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Contact Us</h1>
          <p className="text-xl text-gray-200">Get in touch with our Ghana real estate team</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Have questions about our properties across Ghana? We're here to help you find your perfect home in Accra, Kumasi, and beyond!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-light rounded-lg">
                    <i className="fas fa-map-marker-alt text-xl text-primary"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Address</h3>
                    <p className="text-gray-600">East Legon, Accra, Ghana</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-light rounded-lg">
                    <i className="fas fa-phone text-xl text-primary"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Phone</h3>
                    <p className="text-gray-600">+233 24 123 4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-light rounded-lg">
                    <i className="fas fa-envelope text-xl text-primary"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Email</h3>
                    <p className="text-gray-600">info@homehub.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-light p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-gray-700 font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-gray-700 font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 text-gray-700 font-medium">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-gray-700 font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 h-[150px] resize-y focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-primary text-white px-6 py-4 rounded-lg font-semibold hover:bg-orange-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 shadow-md"
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

export default Contact; 