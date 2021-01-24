import React, { useMemo, useContext, memo } from "react";
import cn from "classnames";

// Styles
import "./Form.scss";

// Utils
import { useFormValues } from "./useFormValues";
import { renderComponents, validateForm } from "./utils";

const FormContext = React.createContext({});

const Form = ({ config, style, className, onSubmit, labelsWidth = 100 }) => {
  const {
    values,
    errors,
    handleEventInputChange,
    handleInputChange,
    setError,
    resetError,
    resetForm,
  } = useFormValues();

  const handleSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (!validateForm(config, values, setError)) {
      return;
    }

    if (typeof onSubmit === "function") onSubmit(values, { resetForm });
  };

  const componentsToRender = useMemo(
    () =>
      renderComponents({
        config,
        handleEventInputChange,
        handleInputChange,
        handleSubmit,
        labelsWidth,
      }),
    [config, labelsWidth]
  );

  return (
    <FormContext.Provider value={{ values, errors }}>
      <form
        className={cn("Form", className)}
        style={style}
        onSubmit={handleSubmit}
      >
        {componentsToRender}
      </form>
    </FormContext.Provider>
  );
};

export const FormRow = memo(
  ({
    description,
    name,
    label,
    placeholder,
    required,
    onChange,
    onSubmit,
    Component,
    labelsWidth,
    type,
    componentProps,
  }) => {
    const { values, errors } = useContext(FormContext);

    const value = values[name];
    const error = errors[name];

    return (
      <div className="FormRow">
        <div
          className={cn("FormRow__label", {
            "FormRow__label--required": required,
          })}
          style={{
            width: labelsWidth,
          }}
        >
          <span>{label}</span>
        </div>
        <div className="FormRow__content">
          <Component
            value={value}
            placeholder={placeholder}
            required={required}
            onChange={onChange}
            onSubmit={onSubmit}
            name={name}
            type={type}
            {...componentProps}
          />
          {error && <div className="FormRow__error">{error}</div>}
          {!error && description && (
            <div className="FormRow__description">{description}</div>
          )}
        </div>
      </div>
    );
  }
);

export default Form;
