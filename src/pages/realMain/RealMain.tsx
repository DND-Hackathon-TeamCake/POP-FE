"use client";
import Icon from "@/components/Icon/Icon";
import useLocation from "@/hooks/useLocation";
import React from "react";
import styles from "./RealMain.module.scss";
import MainBtn from "@/components/Button/MainBtn";
import { useRouter } from "next/navigation";

const RealMain = () => {
  const { depthName } = useLocation();
  const router = useRouter();

  const linkPage = (pagename: string) => {
    router.push(pagename);
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        {/* 메인 아이콘 영역 */}
        <div className={styles.iconContainer}>
          <div className={styles.iconWrapper} onClick={() => linkPage("/letter")}>
            <Icon name="motif" width="100%" height="100%">
              <div className={styles.textOverlay}>
                <div className={styles.depthFont}>{depthName}</div>
                <div className={styles.subFont}>조각 보러가기 &gt;</div>
              </div>
            </Icon>
          </div>
        </div>

        {/* 버튼 영역 */}
        <div className={styles.btnContainer}>
          <MainBtn
            iconName="solar"
            content="이웃과 마음을 나눈 지역 TOP 3"
            click={() => linkPage("/ranking")}
          />
        </div>
      </div>

      {/* 하단 탭 */}
      <div className={styles.bottomTab}>
        <button
          className={styles.bottomBtn}
          onClick={() => linkPage("/collect")}
          aria-label="수집함"
        >
          <Icon name="box" width={24} height={24} />
        </button>
        <button className={styles.bottomBtn} onClick={() => linkPage("/write")} aria-label="글쓰기">
          <Icon name="pencil" width={24} height={24} />
        </button>
      </div>
    </div>
  );
};

export default RealMain;
