"use client";

import Button from "@/components/Button/Button";
import useLocation from "@/hooks/useLocation";
import React, { useEffect } from "react";
import styles from "./MainPage.module.scss";
import Icon from "@/components/Icon/Icon";

const MainPage = () => {
  const { location, error, depthName } = useLocation();

  useEffect(() => {
    if (location) console.log(location);
    if (depthName) console.log(depthName);
    if (error) console.log("위치 권한 허용해라");
  }, [location, error, depthName]);

  const handleKakaoLogin = () => {
    console.log("로그인");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>POP</h1>
      <p className={styles.subtitle}>
        Piece of People, <br />
        단절된 사회를 다시 기억하기 위하여
      </p>
      <img src="assets/images/main.svg" alt="main" />
      <Button
        type="button-kakao"
        size="l"
        onClick={handleKakaoLogin}
        leftIcon={<Icon name="kakao" width={16} height={16} />}
      >
        카카오 로그인
      </Button>
    </div>
  );
};

export default MainPage;
