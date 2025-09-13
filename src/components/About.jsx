import { teamMembers, heroImages } from '../data/dummyData';
import TeamCard from './ui/TeamCard';
import ValuesSection from './ValuesSection';

const About = () => {
  return (
    <div className="mt-[70px]">
      {/* Hero Section */}
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImages.about})` }}
      >
        {/* Orange overlay for better text readability */}
        <div className="absolute inset-0 bg-orange-600/60"></div>
        
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Us</h1>
          <p className="text-xl text-gray-200">Your Trusted Partner in Ghana Real Estate</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Our Story</h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Founded in 2020, HomeHub has been at the forefront of
            providing exceptional real estate services across Ghana. We believe
            in building lasting relationships and delivering value beyond
            expectations in Accra, Kumasi, and beyond.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our team of experienced professionals is dedicated to helping you find
            the perfect property that matches your lifestyle and investment goals
            in Ghana's growing real estate market.
          </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-8 bg-white rounded-lg">
              <h3 className="text-4xl font-bold text-primary mb-2">1000+</h3>
              <p className="text-gray-600 text-lg">Properties Sold</p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg">
              <h3 className="text-4xl font-bold text-primary mb-2">500+</h3>
              <p className="text-gray-600 text-lg">Happy Clients</p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg">
              <h3 className="text-4xl font-bold text-primary mb-2">50+</h3>
              <p className="text-gray-600 text-lg">Expert Agents</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map(member => (
              <TeamCard key={member.id} {...member} />
            ))}
          </div>
        </div>
      </section> */}

      {/* Values Section */}
      <section className="py-16 bg-light">
        <ValuesSection />
      </section>
    </div>
  );
};

export default About; 