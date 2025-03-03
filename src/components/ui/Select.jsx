import { LucideHome } from "lucide-react";

const Select = ({ 
  icon: Icon = LucideHome, 
  label, 
  options = [], 
  className = "",
  ...props 
}) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label className="text-sm text-left text-gray-600 mb-1">{label}</label>
      )}
      <div className="flex items-center px-2  border-1 border-gray-300 rounded  px-3 py-2">
        {Icon && <Icon className="w-4 h-4 text-gray-500" />}
        <select
          className={`ml-2 bg-transparent    text-gray-700 outline-none  w-full ${className}`}
          {...props}
        >
          {options.map((option, index) => (
            <option className="text-gray-700" key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select; 