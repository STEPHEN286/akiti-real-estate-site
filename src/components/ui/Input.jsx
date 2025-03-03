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
    <div className="flex flex-col ">
      {label && (
        <label className="text-sm text-left text-gray-600 mb-1">{label}</label>
      )}
      <div className="flex items-center   border-1 border-gray-300 rounded  px-3 py-2">
        {Icon && <Icon className="w-4 h-4 text-gray-500" />}
        <input
          type={type}
          placeholder={placeholder}
          className={`ml-2 bg-transparent outline-none  text-gray-700 w-full ${className}`}
          {...props}
        />
      </div>
    </div>
  );
};

export default Input; 