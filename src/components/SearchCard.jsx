import { LucideDollarSign, LucideHome, LucideMapPin, LucideSearch } from "lucide-react";
import Input from "./ui/Input";
import Select from "./ui/Select";

const SearchCard = () => {
  const priceOptions = [
    { value: "any", label: "Any price" },
    { value: "under-200k", label: "Under $200k" },
    { value: "200k-500k", label: "$200k - $500k" },
    { value: "500k-1m", label: "$500k - $1M" },
    { value: "over-1m", label: "Over $1M" }
  ];

  const propertyTypeOptions = [
    { value: "all", label: "All Types" },
    { value: "house", label: "House" },
    { value: "apartment", label: "Apartment" },
    { value: "villa", label: "Villa" }
  ];

  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-4 md:p-6">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        <div className="flex-1">
          <Select
            icon={LucideDollarSign}
            label="Price-Range"
            options={priceOptions}
            className="w-full"
          />
        </div>

        <div className="flex-1">
          <Select
            icon={LucideHome}
            label="Property Type"
            options={propertyTypeOptions}
            className="w-full"
          />
        </div>

        <div className="flex-1">
          <Input
            icon={LucideMapPin}
            label="Location"
            placeholder="City, State"
            className="w-full"
          />
        </div>

        <div className="flex items-end">
          <button className="w-full md:w-auto flex items-center justify-center bg-black text-white px-6 py-2.5 rounded-md hover:bg-gray-800 transition-colors duration-300">
            <LucideSearch className="w-4 h-4 mr-2" /> 
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
