"use client";

import Button from "@/components/Button/Button";
import React from "react";
import styles from "./MainPage.module.scss";
import Icon from "@/components/Icon/Icon";
import { useRouter } from "next/navigation";

const MainPage = () => {
  const router = useRouter();

  const handleKakaoLogin = () => {
    console.log("로그인");
    //로그인 처리 결과에 따라 갈지 말지 결정
    router.push("/main");
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
