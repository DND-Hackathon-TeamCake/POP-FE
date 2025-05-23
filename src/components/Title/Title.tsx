import React from "react";
import styles from "./Title.module.scss";

interface TitleProps {
  title: string;
  description: string;
}

const Title = ({ title, description }: TitleProps) => {
  return (
    <div className={styles.box}>
      <div className={styles.group}>
        <div className={styles["text-wrapper"]}>{title}</div>
        <p className={styles.description}>
          {description.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Title;
