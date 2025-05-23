import React from "react";
import styles from "./Button.module.scss";
import { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = ({
  type = "fill",
  size = "m",
  leftIcon,
  children,
  ...rest
}) => {
  const className = [styles.button, styles[type], styles[size]].filter(Boolean).join(" ");

  return (
    <button className={className} {...rest}>
      {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
      {children}
    </button>
  );
};

export default Button;
