import { Users, Star, Crown } from "lucide-react";

const ValuesSection = () => {
  const values = [
    {
      icon: <Crown className="w-6 h-6 text-primary" />, 
      title: "Sankofa",
      description: "We honor our heritage while building Ghana's future through responsible real estate development."
    },
    {
      icon: <Star className="w-6 h-6 text-accent" />, 
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service delivery across Ghana's real estate market."
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />, 
      title: "Ubuntu",
      description: "We believe in community - our clients' success is our success, and we grow together."
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <div key={index} className="text-center p-8 bg-white rounded-lg border border-gray-200">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-light rounded-lg">{value.icon}</div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">{value.title}</h3>
            <p className="text-gray-600">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValuesSection; 