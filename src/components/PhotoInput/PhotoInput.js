import React, { useState, useEffect } from "react";

// Components
import Button from "components/Button";
import FileInput from "components/FileInput";

// Styles
import "./PhotoInput.scss";

const ROTATION_ANGLE = 90;

const PhotoInput = ({ value, name, onChange }) => {
  const [previewSrc, setPreviewSrc] = useState();
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (!value && setPreviewSrc) setPreviewSrc(null);
    if (!value) return;

    setPreviewSrc(URL.createObjectURL(value));
  }, [value]);

  const rotatePhoto = () => {
    setRotation(rotation + ROTATION_ANGLE);
    onChange(`${name}_rotation`, (rotation + ROTATION_ANGLE) % 360);
  };

  return (
    <div className="PhotoInput">
      {previewSrc && (
        <img
          src={previewSrc}
          className="PhotoInput__preview"
          style={{ transform: `rotate(${rotation}deg)` }}
        />
      )}
      <FileInput
        name={name}
        value={value}
        onChange={onChange}
        accept="image/*"
      />
      {previewSrc && (
        <Button
          onClick={rotatePhoto}
          size="small"
          className="PhotoInput__rotate-button"
        >
          Развернуть
        </Button>
      )}
    </div>
  );
};

export default PhotoInput;
