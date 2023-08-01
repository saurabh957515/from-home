import React from "react";
import SelectInput from "../SelectInput"; // Make sure to provide the correct path to the SelectInput component

function htmlForm() {
  // Options for the "State" select input
  const stateOptions = [
    { label: "State 1", value: "state1" },
    { label: "State 2", value: "state2" },
    { label: "State 3", value: "state3" },
    // Add more options as needed
  ];

  // Options for the other select inputs (if any)

  return (
    // ...
    <div className="mt-2">
      <SelectInput
        label="State"
        name="region"
        id="region"
        options={stateOptions}
        autoComplete="address-level1"
      />
    </div>
    // ...
  );
}

export default htmlForm;
