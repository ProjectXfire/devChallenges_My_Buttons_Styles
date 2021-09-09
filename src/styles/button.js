import styled from "styled-components";

const colorDefault = "#efefef";
const colorDefaultHoverFocus = "#aeaeae";
const colorPrimary = "#1976d2";
const colorPrimaryHoverFocus = "#002f6c";
const colorSecondary = "#455a64";
const colorSecondaryHoverFocus = "#1c313a";
const colorDanger = "#c62828";
const colorDangerHoverFocus = "#7f0000";
const colorOutlineHoverFocus = "#c0cfff";
const colorTextDisabled = "#c2c2c2";

export const Button = styled.button`
  display: flex;
  outline: none;
  padding: ${(props) => {
    if (props.size === "sm") {
      return "5px 10px";
    }
    if (props.size === "md") {
      return "10px 15px";
    }
    if (props.size === "lg") {
      return "13px 20px";
    }
    return "7px 14px";
  }};
  border-radius: 5px;
  box-shadow: ${(props) => {
    if (props.variant || props.disableShadow || props.disabled) {
      return "none";
    } else {
      return "5px 5px 3px -3px rgba(0, 0, 0, 0.2);";
    }
  }};
  background-color: ${(props) => {
    if (props.variant === "text" && props.disabled) {
      return "white";
    }
    if (props.variant) {
      return "white";
    }
    if (props.disabled) {
      return colorDefault;
    }
    if (props.color === "primary") {
      return colorPrimary;
    }
    if (props.color === "secondary") {
      return colorSecondary;
    }
    if (props.color === "danger") {
      return colorDanger;
    }
    return colorDefault;
  }};
  color: ${(props) => {
    if (props.variant === "text" && props.disabled) {
      return colorTextDisabled;
    }
    if (props.variant === "outline" || props.variant === "text") {
      if (props.color === "primary") {
        return colorPrimary;
      }
      if (props.color === "secondary") {
        return colorSecondary;
      }
      if (props.color === "danger") {
        return colorDanger;
      }
      if (props.color === "default") {
        return colorDefault;
      }
      return colorPrimary;
    }
    if (props.disabled) {
      return colorTextDisabled;
    }
    if (
      props.color === "primary" ||
      props.color === "secondary" ||
      props.color === "danger"
    ) {
      return "white";
    }
    return "black";
  }};
  border: ${(props) => {
    if (props.variant === "outline") {
      if (props.color === "primary") {
        return `1px solid ${colorPrimary}`;
      }
      if (props.color === "secondary") {
        return `1px solid ${colorSecondary}`;
      }
      if (props.color === "danger") {
        return `1px solid ${colorDanger}`;
      }
      if (props.color === "default") {
        return `1px solid ${colorDefault}`;
      }
      return `1px solid ${colorPrimary}`;
    }
    return "none";
  }};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => {
      if (props.variant && props.disabled) {
        return "white";
      }
      if (props.variant) {
        if (props.color === "primary") {
          return colorPrimaryHoverFocus;
        }
        if (props.color === "secondary") {
          return colorSecondaryHoverFocus;
        }
        if (props.color === "danger") {
          return colorDangerHoverFocus;
        }
        if (props.color === "default") {
          return colorDefaultHoverFocus;
        }
        return colorOutlineHoverFocus;
      }
      if (props.disabled) {
        return colorDefault;
      }
      if (props.color === "primary") {
        return colorPrimaryHoverFocus;
      }
      if (props.color === "secondary") {
        return colorSecondaryHoverFocus;
      }
      if (props.color === "danger") {
        return colorDangerHoverFocus;
      }
      if (props.color === "default") {
        return colorDefaultHoverFocus;
      }
      if (props.disabled) {
        return colorDefault;
      }
      return colorDefaultHoverFocus;
    }};
  }
  &:focus {
    background-color: ${(props) => {
      if (props.variant && props.disabled) {
        return "white";
      }
      if (props.variant) {
        if (props.color === "primary") {
          return colorPrimaryHoverFocus;
        }
        if (props.color === "secondary") {
          return colorSecondaryHoverFocus;
        }
        if (props.color === "danger") {
          return colorDangerHoverFocus;
        }
        if (props.color === "default") {
          return colorDefaultHoverFocus;
        }
        return colorOutlineHoverFocus;
      }
      if (props.disabled) {
        return colorDefault;
      }
      if (props.color === "primary") {
        return colorPrimaryHoverFocus;
      }
      if (props.color === "secondary") {
        return colorSecondaryHoverFocus;
      }
      if (props.color === "danger") {
        return colorDangerHoverFocus;
      }
      if (props.color === "default") {
        return colorDefaultHoverFocus;
      }
      if (props.disabled) {
        return colorDefault;
      }
      return colorDefaultHoverFocus;
    }};
  }
`;

export const IconContainer = styled.span`
  margin-left: ${(props) => (props.startIcon ? 0 : "7px")};
  margin-right: ${(props) => (props.endIcon ? 0 : "7px")};
`;
