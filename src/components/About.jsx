import { teamMembers } from '../data/dummyData';
import TeamCard from './ui/TeamCard';
import ValuesSection from './ValuesSection';

const About = () => {
  return (
    <div className="mt-[70px]">
      <section className="h-[40vh] bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&auto=format&fit=crop&q=60')] bg-center bg-cover flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-5xl mb-4">About Us</h1>
        <p className="text-xl">Your Trusted Partner in Real Estate</p>
      </section>

      <section className="py-16 px-[5%] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl mb-6 text-gray-800">Our Story</h2>
          <p className="mb-4 text-gray-600 leading-relaxed">
            Founded in 2020, Akiti Real Estate has been at the forefront of
            providing exceptional real estate services to our clients. We believe
            in building lasting relationships and delivering value beyond
            expectations.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our team of experienced professionals is dedicated to helping you find
            the perfect property that matches your lifestyle and investment goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gray-50 rounded-lg hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-4xl text-black mb-2">1000+</h3>
            <p className="text-gray-600 text-lg">Properties Sold</p>
          </div>
          <div className="text-center p-8 bg-gray-50 rounded-lg hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-4xl text-black mb-2">500+</h3>
            <p className="text-gray-600 text-lg">Happy Clients</p>
          </div>
          <div className="text-center p-8 bg-gray-50 rounded-lg hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-4xl text-black mb-2">50+</h3>
            <p className="text-gray-600 text-lg">Expert Agents</p>
          </div>
        </div>
      </section>


      <section className="py-16 px-[5%] bg-gray-50">
        <h2 className="text-4xl text-center mb-12 text-gray-800">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map(member => (
            <TeamCard key={member.id} {...member} />
          ))}
        </div>
      </section>
          <ValuesSection />
    </div>
  );
};

export default About; 