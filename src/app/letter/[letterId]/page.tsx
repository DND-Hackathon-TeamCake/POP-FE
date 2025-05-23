import React from "react";
import Record from "@/components/Record/Record";

export default function Page({ params }: { params: { letterId: string } }) {
  const letterId = Number(params.letterId);
  return <Record letterId={letterId} />;
}
