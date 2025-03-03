import React from "react";
import { Star } from "lucide-react";
import bernard from "../assets/images/bernard.jpeg";
import anthony from "../assets/images/anthony.jpeg";
import florence from "../assets/images/IMG@1x (1).png";

const testimonials = [
  {
    name: "Florence Cobbinah",
    role: "Home Buyer",
    image: florence, 
    review:
      "Outstanding service! The team helped me find my dream home within my budget. Their expertise and dedication made the whole process smooth and enjoyable.",
    rating: 3,
  },
  {
    name: "Bernard Teye",
    role: "Property Seller",
    image: bernard, 
    review:
      "I sold my property through their platform and was impressed by their professionalism. They handled everything efficiently and got me the best price possible.",
    rating: 3,
  },
  {
    name: "Anthony Cobbold",
    role: "Real Estate Investor",
    image: anthony,
    review:
      "As an investor, I appreciate their market insights and property recommendations. They've helped me build a strong portfolio with excellent returns.",
    rating: 3,
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 text-center">
      <h2 className="text-2xl font-bold">What Our Clients Say</h2>
      <p className="text-gray-500 mb-6">Testimonials from our satisfied customers</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="text-left">
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">{testimonial.review}</p>
            <div className="flex space-x-1 justify-start">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="text-yellow-500 fill-yellow-500" size={18} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials; 