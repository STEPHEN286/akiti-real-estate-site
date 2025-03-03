import { Home, Key, Tag } from "lucide-react";

const PropertyOptions = () => {
  const options = [
    {
      title: "Buy a Home",
      description: "Find your place with an immersive photo experience and the most listings.",
      icon: <Home size={32} />,
      buttonText: "Buy a Home",
    },
    {
      title: "Rent a Home",
      description: "Find your place with an immersive photo experience and the most listings.",
      icon: <Key size={32} />,
      buttonText: "Rent a Home",
    },
    {
      title: "Sell a Home",
      description: "Find your place with an immersive photo experience and the most listings.",
      icon: <Tag size={32} />,
      buttonText: "Sell a Home",
    },
  ];

  return (
    <div className="text-center p-6">
      <h2 className="text-2xl font-semibold">What are you looking for?</h2>
      <p className="text-gray-500 mb-6">Choose from our wide range of properties</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {options.map((option, index) => (
          <div key={index} className="p-6 bg-gray-100 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-gray-300 rounded-full p-4">{option.icon}</div>
            </div>
            <h3 className="text-lg font-semibold">{option.title}</h3>
            <p className="text-gray-600 mb-4">{option.description}</p>
            <button className="border border-black py-2 px-4 rounded-md hover:bg-black hover:text-white transition">
              {option.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyOptions; 