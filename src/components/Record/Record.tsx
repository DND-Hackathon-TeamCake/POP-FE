"use client";

import React, { useEffect } from "react";
import { useSelectedLetter } from "@/store/useSelectedLetter";
import Header from "../Header/Header";
import Button from "../Button/Button";
import { getLetterById, storeLetter } from "@/services/letter";
import styles from "./Record.module.scss";
import { ICONS } from "@/constants/icons";

interface Props {
  letterId: number;
}

const Record = ({ letterId }: Props) => {
  const letter = useSelectedLetter((state) => state.selectedLetter);
  const setSelectedLetter = useSelectedLetter((state) => state.setSelectedLetter);

  useEffect(() => {
    if (!letter) {
      const fetch = async () => {
        try {
          const data = await getLetterById(letterId);
          setSelectedLetter(data);
        } catch (e) {
          console.error("레터 조회 실패:", e);
        }
      };
      fetch();
    }
  }, [letterId, letter, setSelectedLetter]);

  const handleStore = async () => {
    if (!letter) return;
    try {
      await storeLetter(String(letter.letterId));
      alert("기록이 보관되었습니다!");
    } catch (error) {
      console.error("보관 실패:", error);
      alert("보관에 실패했습니다.");
    }
  };

  if (!letter) return <div>로딩 중...</div>;

  return (
    <div>
      <Header pagename="Today’s Piece" />
      <div className={styles.container}>
        {letter.imageUrl && (
          <img src={letter.imageUrl ?? ICONS["defaultPop"]} alt="record" className={styles.image} />
        )}
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>
            팝! 도착한 <span className={styles.region}>{letter.region}</span>의 기록
          </h1>
          <p className={styles.content}>{letter.content}</p>
          <Button type="button-store" size="l" onClick={handleStore}>
            보관하기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Record;
