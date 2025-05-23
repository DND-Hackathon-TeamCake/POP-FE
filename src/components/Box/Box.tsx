import React from "react";
import styles from "./Box.module.scss";
import { BoxProps } from "./Box.types";

const Box: React.FC<BoxProps> = ({ type, size = "md", timestamp, content, onClick, children }) => {
  const baseClass = styles.box;
  const typeClass = styles[type];
  const sizeClass = styles[size];

  return (
    <div className={[baseClass, typeClass, sizeClass].filter(Boolean).join(" ")}>
      <div className={styles.top}>{timestamp}</div>
      <div className={styles.middle}>{content}</div>
      <div className={styles.bottom}>
        <button className={styles.button} onClick={onClick}>
          확인하기 {">"}
        </button>
      </div>
      {children}
    </div>
  );
};

export default Box;
