import React from "react";
import styles from "./Header.module.scss";

interface HeaderProps {
  pagename: string;
}

const Header: React.FC<HeaderProps> = ({ pagename }) => {
  return (
    <div className={styles.container}>
      <div className={styles.back}>
        <img src={"assets/icons/back.svg"} alt="뒤로가기" />
      </div>
      <p className={styles.pagename}>{pagename}</p>
    </div>
  );
};

export default Header;
