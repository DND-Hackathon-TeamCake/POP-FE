"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styles from "./Header.module.scss";

interface HeaderProps {
  pagename: string;
}

const Header: React.FC<HeaderProps> = ({ pagename }) => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className={styles.container}>
      <div className={styles.back} onClick={handleBackClick}>
        <img src={"assets/icons/back.svg"} alt="뒤로가기" />
      </div>
      <p className={styles.pagename}>{pagename}</p>
    </div>
  );
};

export default Header;
