import React, { useState, useEffect, useMemo } from "react";

// Components
import Checkbox from "components/Checkbox";

// Styles
import "./CheckboxGroup.scss";

const CheckboxGroup = ({
  options = [],
  name,
  value,
  onChange,
  columnsCount = 1,
}) => {
  const handleChange = (valueToToggle) => {
    if (typeof onChange !== "function") return;

    if (!value) return onChange(name, [valueToToggle]);

    // Uncheck checkbox if it exists in values array
    if (value.includes(valueToToggle))
      return onChange(
        name,
        value.filter((item) => item !== valueToToggle)
      );

    // Check checkbox if it doesn't exist in values array
    return onChange(name, [...value, valueToToggle]);
  };

  const isEverythingChecked =
    Array.isArray(value) && options.length === value.length;

  const toggleCheckAll = () => {
    if (isEverythingChecked) return onChange(name, []);

    onChange(
      name,
      options.map((option) => option.value)
    );
  };

  const optionsToRender = useMemo(() => {
    const _optionsToRender = options.map((option) => (
      <Checkbox
        key={option.value}
        value={value && value.includes(option.value)}
        onChange={() => handleChange(option.value)}
        label={option.label}
        name={name}
      />
    ));
    _optionsToRender.push(
      <Checkbox
        key={"_check_all"}
        value={isEverythingChecked}
        onChange={toggleCheckAll}
        label="Выделить все"
        name={name}
        className="CheckboxGroup__check-all-checkbox"
      />
    );

    return _optionsToRender;
  }, [options, value, name, isEverythingChecked, toggleCheckAll]);

  // Split checkboxes into columns
  const columnsToRender = useMemo(() => {
    const columnsLength = Math.ceil((options.length + 1) / columnsCount);
    const _columnsToRender = optionsToRender.reduce((acc, component, index) => {
      const columnIndex = Math.floor(index / columnsLength);
      if (!acc[columnIndex]) acc[columnIndex] = [];

      acc[columnIndex].push(component);

      return acc;
    }, []);

    return _columnsToRender.map((column, index) => (
      <div key={index} className="CheckboxGroup__column">
        {column}
      </div>
    ));
  }, [optionsToRender, columnsCount]);

  return <div className="CheckboxGroup">{columnsToRender}</div>;
};

export default CheckboxGroup;
