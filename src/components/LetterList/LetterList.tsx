"use client";

import React, { useEffect, useState } from "react";
import { fetchAllLetter } from "@/services/letter";
import type { letter as Letter } from "@/types/letter";
import Box from "../Box/Box";

const LetterList = () => {
  const [letters, setLetters] = useState<Letter[]>([]);

  useEffect(() => {
    const getLetters = async () => {
      try {
        const result = await fetchAllLetter("마포구");
        setLetters(result);
      } catch (error) {
        console.error(error);
      }
    };
    getLetters();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {letters.map((letter) => (
        <Box
          key={letter.letterId}
          type="blue"
          timestamp={letter.createdAt ?? ""}
          content={letter.content}
          onClick={() => alert(`확인: ${letter.letterId}`)}
        />
      ))}
    </div>
  );
};

export default LetterList;
