import React, { FC, useRef } from "react";

// Components
import Button from "components/Button";

// Styles
import "./FileInput.scss";

const FileInput = ({ value, name, onChange, accept }) => {
  const inputRef = useRef();

  return (
    <div className="FileInput">
      <Button
        onClick={() => {
          if (!inputRef || !inputRef.current) return;

          inputRef.current.click();
        }}
        type="button"
        size="small"
      >
        Выбрать файл
      </Button>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        style={{ display: "none" }}
        value={""}
        name={name}
        onChange={(e) => {
          if (!e.target.files) return;

          if (e.target.files.length > 0) onChange(name, e.target.files[0]);
        }}
      ></input>
    </div>
  );
};

export default FileInput;
