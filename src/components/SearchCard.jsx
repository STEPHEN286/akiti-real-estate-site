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
    <div className="flex items-center space-x-4 p-4 bg-white rounded-lg w-fit">
      <Select
        icon={LucideDollarSign}
        label="Price-Range"
        options={priceOptions}
      />

      <Select
        icon={LucideHome}
        label="Property Type"
        options={propertyTypeOptions}
      />

      <Input
        icon={LucideMapPin}
        label="Location"
        placeholder="City, State"
        className=""
      />

      <div className="flex flex-col">
        <p className="mb-6"></p>
        <button className="flex items-center bg-black text-white px-4 py-2 rounded">
          <LucideSearch className="w-4 h-4 mr-2" /> Search
        </button>
      </div>
    </div>
  );
};

export default SearchCard;
