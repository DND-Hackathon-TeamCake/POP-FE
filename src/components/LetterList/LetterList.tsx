"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Box from "../Box/Box";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import { useRouter } from "next/navigation";
import { useSelectedLetter } from "@/store/useSelectedLetter";

const LetterList = () => {
  const router = useRouter();
  const { setSelectedLetter } = useSelectedLetter();
  const letters = [
    { letterId: 1, content: "안녕하세요", createdAt: "25.05.24" },
    { letterId: 2, content: "좋은 하루 보내요~", createdAt: "25.05.25" },
    { letterId: 3, content: "오늘은 24절기 중 일곱 번째 절기에요!", createdAt: "25.05.26" },
    { letterId: 4, content: "하이하이", createdAt: "25.05.27" },
    { letterId: 5, content: "힘내세용", createdAt: "25.05.28" },
  ];

  const [activeIndex, setActiveIndex] = useState(Math.floor(letters.length / 2));
  const [dragOffset, setDragOffset] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(prev + 1, letters.length - 1));
  };

  const handleDragEnd = (event: unknown, info: { offset: { x: number } }) => {
    const threshold = 50;

    if (info.offset.x > threshold) {
      handlePrev();
    } else if (info.offset.x < -threshold) {
      handleNext();
    }

    setDragOffset(0);
  };

  const handleDrag = (event: unknown, info: { offset: { x: number } }) => {
    setDragOffset(info.offset.x);
  };

  const handlePick = (letterId?: number) => {
    const target = letters.find(
      (l) => l.letterId === (letterId ?? letters[activeIndex]?.letterId)
    );

    if (target) {
      setSelectedLetter(target); // 선택한 편지 저장
      router.push(`/letter/${target.letterId}`); // 페이지 이동
    }
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "420px",
        margin: "auto",
        padding: "60px 0",
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "260px",
          perspective: "1000px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {letters.map((letter, index) => {
          const offset = index - activeIndex;
          const distance = Math.abs(offset);
          const isActive = offset === 0;

          let x = 0;
          let rotateY = 0;
          let scale = 1;
          let zIndex = 0;
          let opacity = 1;

          if (isActive) {
            x = -dragOffset * 0.3;
            scale = 1;
            zIndex = 10;
          } else {
            const baseX = offset > 0 ? 120 + (distance - 1) * 30 : -120 - (distance - 1) * 30;
            x = baseX - dragOffset * 0.05;
            rotateY = offset > 0 ? -45 : 45;
            scale = 0.75;
            zIndex = -distance;
            opacity = distance > 2 ? 0 : 0.7;
          }

          return (
            <motion.div
              key={letter.letterId}
              className="motion-slide"
              animate={{ x, rotateY, scale, opacity, zIndex }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              drag={isActive ? "x" : false}
              dragElastic={0.3}
              dragConstraints={{ left: 0, right: 0 }}
              onDrag={isActive ? handleDrag : undefined}
              onDragEnd={isActive ? handleDragEnd : undefined}
              style={{
                position: "absolute",
                transformOrigin: "center center",
                willChange: "transform, opacity",
              }}
            >
              <Box
                size={isActive ? "lg" : "md"}
                type="blue"
                timestamp={letter.createdAt}
                content={letter.content}
                onClick={() => handlePick(letter.letterId)}
              />
            </motion.div>
          );
        })}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: "80px",
          // gap: "20px",
        }}
      >
        <div
          onClick={handlePrev}
          style={{
            cursor: "pointer",
            padding: "8px",
            borderRadius: "50%",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.05)";
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <Icon name="prev" width={28} height={28} />
        </div>

        <Button type="fill" size="m" onClick={handlePick}>
          Pick
        </Button>

        <div
          onClick={handleNext}
          style={{
            cursor: "pointer",
            padding: "8px",
            borderRadius: "50%",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.05)";
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <Icon name="next" width={28} height={28} />
        </div>
      </div>
    </div>
  );
};

export default LetterList;
