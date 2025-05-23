"use client";

import React from "react";
import Record from "@/components/Record/Record";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  const letterId = Number(params?.letterId);
  return <Record letterId={letterId} />;
}
