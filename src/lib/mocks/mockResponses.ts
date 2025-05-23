// 모킹 데이터

export const mockResponses = {
  "/user": { id: 1, name: "Mock User" },
  "/api/letters?region=마포구": {
    region: "마포구",
    letters: [
      {
        letterId: 1,
        content: "다들 좋은 하루 보내세요1",
        createdAt: "25.05.24",
      },
      {
        letterId: 2,
        content: "다들 좋은 하루 보내세요2",
        createdAt: "25.05.24",
      },
      {
        letterId: 3,
        content: "다들 좋은 하루 보내세요3",
        createdAt: "25.05.24",
      },
    ],
  },
} as const;
