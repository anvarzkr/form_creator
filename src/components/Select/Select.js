import React, { useState, useEffect, useMemo, useRef } from "react";
import cn from "classnames";
import { useClickAway } from "react-use";

// Styles
import "./Select.scss";

const Select = ({
  options = [],
  name,
  value,
  placeholder,
  onChange,
  style,
}) => {
  const [isDropdownVisible, setDropdownVisiblity] = useState(false);
  const toggleDropdownVisiblity = () => {
    setDropdownVisiblity(!isDropdownVisible);
  };

  const handleChange = (newValue) => {
    if (typeof onChange === "function") onChange(name, newValue);
  };

  const currentOption = useMemo(
    () => options.find((option) => option.value === value),
    [options, value]
  );

  // Close dropdown if clicked outside of selectbox
  const selectRef = useRef(null);
  useClickAway(selectRef, () => {
    setDropdownVisiblity(false);
  });

  const showPlaceholder = !currentOption;

  return (
    <div
      className="Select"
      className={cn("Select", {
        "Select--expanded": isDropdownVisible,
      })}
      style={style}
      ref={selectRef}
    >
      <div
        className={cn("Select__container", {
          "Select__container--with-placeholder": showPlaceholder,
        })}
        onClick={toggleDropdownVisiblity}
      >
        {!showPlaceholder
          ? currentOption.label || currentOption.value
          : placeholder}
      </div>
      <SelectDropdown
        options={options}
        value={value}
        onChange={handleChange}
        visible={isDropdownVisible}
        close={() => setDropdownVisiblity(false)}
      />
    </div>
  );
};

const SelectDropdown = ({ options, value, onChange, visible, close }) => {
  const optionsToRender = useMemo(
    () =>
      options.map((option) => (
        <li
          key={option.value}
          className={cn("SelectDropdown__list-item", {
            "SelectDropdown__list-item--active": value === option.value,
          })}
          onClick={() => {
            onChange(option.value);
            close();
          }}
        >
          {option.label}
        </li>
      )),
    [options, value, onChange]
  );

  if (!visible) return null;

  return (
    <div className="SelectDropdown">
      <ul className="SelectDropdown__list">{optionsToRender}</ul>
    </div>
  );
};

export default Select;
