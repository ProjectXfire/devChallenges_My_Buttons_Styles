import React from "react";
import { Button as ButtonStyle, IconContainer } from "../styles/button";

export const Button = ({
  text,
  variant,
  disableShadow,
  disabled,
  color,
  size,
  startIcon,
  endIcon,
}) => {
  if (startIcon) {
    const Icons = require("react-icons/all");
    const IconComponent = Icons[startIcon];
    return (
      <ButtonStyle
        variant={variant}
        disableShadow={disableShadow}
        disabled={disabled}
        color={color}
        size={size}
      >
        {!color || color === "default" ? (
          <IconContainer startIcon>
            <IconComponent color="black" />
          </IconContainer>
        ) : (
          <IconContainer startIcon>
            <IconComponent color="white" />
          </IconContainer>
        )}
        {text}
      </ButtonStyle>
    );
  }
  if (endIcon) {
    const Icons = require("react-icons/all");
    const IconComponent = Icons[endIcon];
    return (
      <ButtonStyle
        variant={variant}
        disableShadow={disableShadow}
        disabled={disabled}
        color={color}
        size={size}
      >
        {text}
        {!color || color === "default" ? (
          <IconContainer endIcon>
            <IconComponent color="black" />
          </IconContainer>
        ) : (
          <IconContainer endIcon>
            <IconComponent color="white" />
          </IconContainer>
        )}
      </ButtonStyle>
    );
  }

  return (
    <ButtonStyle
      variant={variant}
      disableShadow={disableShadow}
      disabled={disabled}
      color={color}
      size={size}
    >
      {text}
    </ButtonStyle>
  );
};
