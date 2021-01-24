import React, { useState, useEffect } from "react";
import cn from "classnames";

// Styles
import "./Input.scss";

const Input = ({
  name,
  value = "",
  placeholder,
  onChange,
  disabled = false,
  type = "text",
  style,
  error,
}) => {
  return (
    <div className={cn("InputWrapper", `InputWrapper--type-${type}`)}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        name={name}
        className="Input"
        style={style}
      />
      {type === "number" && (
        <InputNumberSwitcher onChange={onChange} name={name} value={value} />
      )}
      {error && <div className="InputError">{error}</div>}
    </div>
  );
};

const InputNumberSwitcher = ({ onChange, name, value }) => {
  const isDecrementDisabled = +value < 1;

  const handleClickIncrement = () => {
    if (typeof onChange === "function") {
      onChange({ target: { name, value: (+value || 0) + 1 } });
    }
  };

  const handleClickDecrement = () => {
    if (typeof onChange === "function" && !isDecrementDisabled) {
      onChange({ target: { name, value: (+value || 0) - 1 } });
    }
  };

  return (
    <div className="InputNumberSwitcher">
      <button
        type="button"
        className="InputNumberSwitcher__button InputNumberSwitcher__button--increment"
        onClick={handleClickIncrement}
      ></button>
      <div className="InputNumberSwitcher__divider"></div>
      <button
        type="button"
        className="InputNumberSwitcher__button InputNumberSwitcher__button--decrement"
        onClick={handleClickDecrement}
        disabled={isDecrementDisabled}
      ></button>
    </div>
  );
};

export default Input;
