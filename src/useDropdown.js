import React, { useState } from "react";

const useDropdown = (label, defaultState, options) => {
  const [state, setState] = useState(defaultState);
  const DropDown = () => (
    <label htmlFor={label}>
      {label}
      <select
        id={label}
        value={state}
        onChange={(e) => setState(e.target.value)}
      >
        <option>select</option>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );

  return [state, DropDown, setState];
};

export default useDropdown;