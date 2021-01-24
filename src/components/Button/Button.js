import React, { useState, useEffect } from "react";
import cn from "classnames";

// Styles
import "./Button.scss";

const Button = ({
  onClick,
  children,
  className,
  type = "button",
  size = "default",
}) => {
  return (
    <button
      className={cn("Button", className, `Button--size-${size}`)}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
