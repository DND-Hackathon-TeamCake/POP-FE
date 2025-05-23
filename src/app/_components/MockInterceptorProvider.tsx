"use client";

import { useEffect } from "react";
import { axiosInstance } from "@/lib/axiosInstance";
import { setupAxiosMockInterceptor } from "@/lib/mocks/axiosMockInterceptor";
import { ENV } from "@/lib/env";

export default function MockInterceptorProvider() {
  useEffect(() => {
    if (ENV.API_MOCKING === "enabled") {
      setupAxiosMockInterceptor(axiosInstance);
    }
  }, []);

  return null;
}
