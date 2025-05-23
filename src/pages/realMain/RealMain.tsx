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
    <div>
      <div className={styles.container}>
        <div className={styles.iconContainer}>
          <div onClick={() => linkPage("/letter")}>
            <Icon name="motif" width={300} height={300}>
              <div>
                <div className={styles.depthFont}>{depthName}</div>
                <div className={styles.subFont}>{`조각 보러가기 >`}</div>
              </div>
            </Icon>
          </div>
          <div className={styles.btnContainer}>
            {/* <MainBtn iconName='vector' content='내 위치 설정하기' /> */}
            <MainBtn
              iconName="solar"
              content="이웃과 마음을 나눈 지역 TOP 3"
              click={() => linkPage("/ranking")}
            />
          </div>
          <div className={styles.bottomTab}>
            <button className={styles.bottomBtn} onClick={() => linkPage("/collect")}>
              <Icon name="box" width={48} height={48} />
            </button>
            <button className={styles.bottomBtn} onClick={() => linkPage("/write")}>
              <Icon name="pencil" width={40} height={40} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealMain;
