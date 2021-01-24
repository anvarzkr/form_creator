import React, { useState, useEffect } from "react";

// Components
import Input from "components/Input/Input";

// Styles
import "./InputGroup.scss";

// Icons
import { AddIcon, RemoveIcon } from "assets/icons";

const InputGroup = ({ value = [""], placeholder, name, onChange }) => {
  const handleAddInput = () => {
    onChange(name, [...value, ""]);
  };

  const handleRemoveInput = (indexToRemove) => {
    onChange(
      name,
      value.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleChange = (indexToUpdate, newValue) => {
    onChange(
      name,
      value.map((inputValue, index) =>
        index === indexToUpdate ? newValue : inputValue
      )
    );
  };

  const inputsToRender = value.map((inputValue, index) => (
    <div className="InputGroup__row" key={index}>
      <Input
        value={inputValue}
        placeholder={placeholder}
        onChange={(e) => handleChange(index, e.target.value)}
      />
      {index === value.length - 1 && (
        <InputGroupActions
          handleAddInput={handleAddInput}
          handleRemoveInput={() => handleRemoveInput(index)}
          hideRemoveButton={value.length < 2}
        />
      )}
    </div>
  ));

  return <div className="InputGroup">{inputsToRender}</div>;
};

const InputGroupActions = ({
  handleAddInput,
  handleRemoveInput,
  hideRemoveButton,
}) => {
  return (
    <div className="InputGroupActions">
      {!hideRemoveButton && (
        <button
          type="button"
          className="InputGroupActions__button InputGroupActions__button--remove"
          onClick={handleRemoveInput}
        >
          <img src={RemoveIcon} />
        </button>
      )}
      <button
        type="button"
        className="InputGroupActions__button InputGroupActions__button--add"
        onClick={handleAddInput}
      >
        <img src={AddIcon} />
        Добавить еще
      </button>
    </div>
  );
};

export default InputGroup;
