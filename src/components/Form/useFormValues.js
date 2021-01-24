import { useReducer } from "react";

const SET_VALUE_ACTION_TYPE = "SET_VALUE";
const SET_ERROR_ACTION_TYPE = "SET_ERROR";
const RESET_FORM_ACTION_TYPE = "RESET_FORM";

export function useFormValues() {
  const [formData, dispatch] = useReducer(
    (state, { type, payload }) => {
      switch (type) {
        case SET_VALUE_ACTION_TYPE:
          return {
            ...state,
            values: { ...state.values, [payload.name]: payload.value },
          };
        case SET_ERROR_ACTION_TYPE:
          return {
            ...state,
            errors: { ...state.errors, [payload.name]: payload.value },
          };
        case RESET_FORM_ACTION_TYPE:
          return {
            values: {},
            errors: {},
          };
      }
    },
    { values: {}, errors: {} }
  );

  const handleEventInputChange = (e) => {
    dispatch({
      type: SET_VALUE_ACTION_TYPE,
      payload: { name: e.target.name, value: e.target.value },
    });
    resetError(e.target.name);
  };

  const handleInputChange = (name, value) => {
    dispatch({
      type: SET_VALUE_ACTION_TYPE,
      payload: { name, value },
    });
    resetError(name);
  };

  const setError = (name, error) => {
    dispatch({
      type: SET_ERROR_ACTION_TYPE,
      payload: { name, value: error },
    });
  };

  const resetError = (name) => {
    dispatch({
      type: SET_ERROR_ACTION_TYPE,
      payload: { name, value: null },
    });
  };

  const resetForm = (name) => {
    dispatch({
      type: RESET_FORM_ACTION_TYPE,
    });
  };

  return {
    values: formData.values,
    errors: formData.errors,
    handleEventInputChange,
    handleInputChange,
    setError,
    resetError,
    resetForm,
  };
}
