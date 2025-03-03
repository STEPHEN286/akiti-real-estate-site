const TeamCard = ({ name, role, image, bio }) => {
  return (
    <div className="text-center bg-white p-8 rounded-lg shadow hover:-translate-y-2 transition-transform duration-300">
      <img 
        src={image} 
        alt={name} 
        className="w-[150px] h-[150px] rounded-full mx-auto mb-4 object-cover border-4 border-gray-100" 
      />
      <h3 className="text-xl mb-2 text-gray-800 font-semibold">{name}</h3>
      <p className="text-black mb-4 font-medium">{role}</p>
      <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>
    </div>
  );
};

export default TeamCard; 