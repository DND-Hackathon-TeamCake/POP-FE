import React from "react";
import styles from "./Box.module.scss";
import { BoxProps } from "./Box.types";

const Box: React.FC<BoxProps> = ({ type, size = "md", children }) => {
  const baseClass = styles.box;
  const typeClass = styles[type];
  const sizeClass = styles[size];

  return (
    <div className={[baseClass, typeClass, sizeClass].filter(Boolean).join(" ")}>{children}</div>
  );
};

export default Box;
