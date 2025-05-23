// app/api/getRegion/route.ts
import { NextRequest } from "next/server";
import axios, { AxiosError } from "axios";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const x = searchParams.get("x");
  const y = searchParams.get("y");
  const key = process.env.NEXT_PUBLIC_KAKAO_KEY;
  if (!x || !y || !key) {
    return new Response(JSON.stringify({ message: "Missing query parameters" }), {
      status: 400,
    });
  }
  try {
    const { data } = await axios.get("https://dapi.kakao.com/v2/local/geo/coord2regioncode.json", {
      params: {
        x: x,
        y: y,
      },
      headers: {
        Authorization: `KakaoAK ${key}`,
      },
    });
    console.log(data);
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    const err = error as AxiosError;
    return new Response(
      JSON.stringify({
        message: err.response?.data || err.message || "Internal Server Error",
      }),
      { status: err.response?.status || 500 },
    );
  }
}
