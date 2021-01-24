import React, { useState, useEffect } from "react";
import cn from "classnames";

// Styles
import "./Checkbox.scss";

const Checkbox = ({ name, value, onChange, label, className }) => {
  const handleChange = () => {
    onChange(name, !value);
  };

  return (
    <label className={cn("Checkbox", className)}>
      <input
        type="checkbox"
        className="Checkbox__input"
        name={name}
        value={value}
        onChange={handleChange}
        checked={value || false}
      />
      <div className="Checkbox__check"></div>
      <div className="Checkbox__label">{label}</div>
    </label>
  );
};

export default Checkbox;
