"use client";

import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/services/user/getUser";

export default function Test() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  if (isLoading) return <p>로디이잉...</p>;

  return (
    <div>
      <h1>테스트 페이지</h1>
      <p>
        이름: {user.name}
        <br /> (ID: {user.id})
      </p>
    </div>
  );
}
