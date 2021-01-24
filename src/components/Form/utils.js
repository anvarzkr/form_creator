import Button from "../Button";
import Checkbox from "../Checkbox/Checkbox";
import CheckboxGroup from "../CheckboxGroup/CheckboxGroup";
import Input from "../Input/Input";
import InputGroup from "../InputGroup/InputGroup";
import PhotoInput from "../PhotoInput/PhotoInput";
import Select from "../Select/Select";
import { FormRow } from "./Form";

export const renderComponents = ({
  config,
  // working with event variable
  handleEventInputChange,
  // handling change in (name, value) format
  handleInputChange,
  handleSubmit,
  labelsWidth,
}) => {
  if (!config || !Array.isArray(config)) return null;

  const componentsToRender = config
    // Map input type to appropriate Component and handleChange (different from type to type)
    .map((componentConfig) => {
      switch (componentConfig.type) {
        case "text":
          return {
            component: Input,
            handleChange: handleEventInputChange,
            componentConfig,
            componentProps: { ...componentConfig.componentProps, type: "text" },
          };
        case "number":
          return {
            component: Input,
            handleChange: handleEventInputChange,
            componentConfig,
            componentProps: {
              ...componentConfig.componentProps,
              type: "number",
            },
          };
        case "select":
          return {
            component: Select,
            handleChange: handleInputChange,
            componentConfig,
            componentProps: componentConfig.componentProps,
          };
        case "checkbox":
          return {
            component: Checkbox,
            handleChange: handleInputChange,
            componentConfig,
            componentProps: componentConfig.componentProps,
          };
        case "checkbox_group":
          return {
            component: CheckboxGroup,
            handleChange: handleInputChange,
            componentConfig,
            componentProps: componentConfig.componentProps,
          };
        case "input_group":
          return {
            component: InputGroup,
            handleChange: handleInputChange,
            componentConfig,
            componentProps: componentConfig.componentProps,
          };
        case "photo":
          return {
            component: PhotoInput,
            handleChange: handleInputChange,
            componentConfig,
            componentProps: componentConfig.componentProps,
          };
        case "submit":
          return {
            component: Button,
            handleSubmit: handleSubmit,
            componentConfig: { ...componentConfig, label: null },
            componentProps: {
              ...componentConfig.componentProps,
              type: "submit",
              children: componentConfig.label,
            },
          };
        default:
          return null;
      }
    })
    // Filter null values
    .filter((item) => item)
    // Render inputs with labels
    .map(({ component, handleChange, componentConfig, componentProps }) => (
      <FormRow
        description={componentConfig.description}
        labelsWidth={labelsWidth}
        label={componentConfig.label}
        required={componentConfig.required}
        onChange={handleChange}
        onSubmit={handleSubmit}
        key={componentConfig.name}
        name={componentConfig.name}
        Component={component}
        placeholder={componentConfig.placeholder}
        componentProps={componentProps}
      />
    ));

  return componentsToRender;
};

export const validateForm = (config, values, setError) => {
  const errors = config.filter((componentConfig) => {
    if (
      componentConfig.type != "submit" &&
      componentConfig.required &&
      (!values[componentConfig.name] ||
        (Array.isArray(values[componentConfig.name]) &&
          values[componentConfig.name].length === 0))
    ) {
      setError(componentConfig.name, "Поле обязательно для заполнения");
      return true;
    }
  });

  return errors.length === 0;
};
