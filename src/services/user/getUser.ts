import { axiosInstance } from "@/lib/axiosInstance";

export const getUser = async () => {
  const response = await axiosInstance.get("/user");
  return response.data;
};
