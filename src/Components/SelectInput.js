import React, { useState, useEffect } from "react";

function SelectInput({ label, options, defaultValue, ...rest }) {
  const [selectedOption, setSelectedOption] = useState(defaultValue || "");

  useEffect(() => {
    setSelectedOption(defaultValue || "");
  }, [defaultValue]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="mt-2">
      <select
        className="block w-full bg-[#F2F2F2] rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        value={selectedOption}
        onChange={handleOptionChange}
        {...rest}
      >
        {defaultValue === "" && (
  <option value="" disabled>
    {/* Add an optional default placeholder text */}
    {label || ""}
  </option>
)}

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectInput;
