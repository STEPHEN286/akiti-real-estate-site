import { Users, Star, Crown } from "lucide-react";

const ValuesSection = () => {
  const values = [
    {
      icon: <Crown className="w-6 h-6 text-black" />, 
      title: "Integrity",
      description: "We believe in conducting business with the highest level of integrity and transparency."
    },
    {
      icon: <Star className="w-6 h-6 text-black" />, 
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service delivery."
    },
    {
      icon: <Users className="w-6 h-6 text-black" />, 
      title: "Client Focus",
      description: "Our clients' satisfaction is at the heart of everything we do."
    }
  ];

  return (
    <div className="flex flex-col md:flex-row bg-white justify-center gap-6 px-4 py-8">
      {values.map((value, index) => (
        <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-md w-full md:w-1/3 hover:-translate-y-2 transition-transform duration-300">
          <div className="p-2 bg-gray-100 rounded-lg">{value.icon}</div>
          <div>
            <h3 className="font-bold text-lg text-gray-900">{value.title}</h3>
            <p className="text-gray-600">{value.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ValuesSection; 