import { LucideHome } from "lucide-react";

const Select = ({ 
  icon: Icon = LucideHome, 
  label, 
  options = [], 
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
        <select
          className={`ml-2 bg-transparent text-gray-700 outline-none w-full text-sm md:text-base appearance-none ${className}`}
          {...props}
        >
          {options.map((option, index) => (
            <option className="text-gray-700 py-2" key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select; 