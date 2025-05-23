import { axiosInstance } from "@/lib/axiosInstance";
import { rank } from "@/types/ranking";

export const fetchRanking = async (): Promise<rank[]> => {
  const { data } = await axiosInstance.get("/api/mailboxes/rank");
  return data;
}
