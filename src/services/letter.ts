import { axiosInstance } from "@/lib/axiosInstance";
import { letter } from "@/types/letter";

export const fetchAllLetter = async (region: string): Promise<letter[]> => {
  const { data } = await axiosInstance.get(`/api/letters`, {
    params: {
      region,
    },
  });
  return data.letters;
};

export const getLetterById = async (letterId: number): Promise<letter> => {
  const { data } = await axiosInstance.get(`/api/letters/${letterId}`);
  return data;
};

export const generateLetter = async (params: letter) => {
  const { status } = await axiosInstance.post("/api/letters", params);
  return status;
};

export const fetchStoreLetter = async (): Promise<letter[]> => {
  const { data } = await axiosInstance.get("/api/storage");
  return data;
};

export const storeLetter = async (params: string) => {
  const { status } = await axiosInstance.post("/api/storage", {
    params: {
      letterId: params,
    },
  });
  return status;
};

export const reportLetter = async (params: string) => {
  const { status } = await axiosInstance.patch(`/api/letters/${params}/report`, {
    params: {
      letterId: params,
    },
  });
  return status;
};
