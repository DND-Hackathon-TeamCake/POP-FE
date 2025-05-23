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
      <h1 className={styles.title}>Pick of Piece!</h1>
      <Button
        type="button-kakao"
        size="l"
        onClick={handleKakaoLogin}
        leftIcon={<Icon name="kakao" width={16} height={16} />}
      >
        카카오로 시작하기
      </Button>
    </div>
  );
};

export default MainPage;
