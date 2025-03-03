import { useState } from 'react';

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
      <section className="h-[40vh] bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('https://images.unsplash.com/photo-1486406146923-c433d7b6b3f1?w=1600&auto=format&fit=crop&q=60')] bg-center bg-cover flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-5xl mb-4">Contact Us</h1>
        <p className="text-xl">Get in touch with our team</p>
      </section>

      <section className="py-16 px-[5%] grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl mb-4 text-gray-800">Get in Touch</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Have questions about our properties or services? We're here to help!
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <i className="fas fa-map-marker-alt text-2xl text-black mt-1"></i>
              <div>
                <h3 className="text-xl mb-2 text-gray-800">Address</h3>
                <p className="text-gray-600">123 Real Estate Street, City, State 12345</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <i className="fas fa-phone text-2xl text-black mt-1"></i>
              <div>
                <h3 className="text-xl mb-2 text-gray-800">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <i className="fas fa-envelope text-2xl text-black mt-1"></i>
              <div>
                <h3 className="text-xl mb-2 text-gray-800">Email</h3>
                <p className="text-gray-600">info@akiti-realestate.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl mb-6 text-gray-800">Send us a Message</h2>
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
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 h-[150px] resize-y"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-black text-white px-6 py-4 rounded-md font-medium hover:bg-gray-800 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact; 