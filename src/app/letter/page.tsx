import React from "react";
import Title from "@/components/Title/Title";
import LetterList from "@/components/LetterList/LetterList";

export default function LetterMainPage() {
  return (
    <div>
      <Title title="Pick of Piece!" description={`팝! 도착한 누군가의 기록을\n지금 뽑아보세요.`} />
      <LetterList />
    </div>
  );
}
