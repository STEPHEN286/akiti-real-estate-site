import { LucideMapPin } from "lucide-react";

const Input = ({ 
  icon: Icon = LucideMapPin, 
  label, 
  placeholder, 
  type = "text",
  className = "",
  ...props 
}) => {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label className="text-sm font-medium text-gray-700 mb-1.5">{label}</label>
      )}
      <div className="flex items-center border border-gray-300 rounded-md px-3 py-2.5 focus-within:border-black focus-within:ring-1 focus-within:ring-black transition-colors duration-200">
        {Icon && <Icon className="w-4 h-4 text-gray-500 flex-shrink-0" />}
        <input
          type={type}
          placeholder={placeholder}
          className={`ml-2 bg-transparent outline-none text-gray-700 w-full text-sm md:text-base ${className}`}
          {...props}
        />
      </div>
    </div>
  );
};

export default Input; 