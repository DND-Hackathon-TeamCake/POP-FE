import React from "react";
import Record from "@/components/Record/Record";

interface Props {
  params: {
    id: string;
  };
}

export default function LetterDetailPage({ params }: Props) {
  const letterId = Number(params.id);
  return <Record letterId={letterId} />;
}
