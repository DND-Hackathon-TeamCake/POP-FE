export const ICONS = {
  test: "/assets/icons/test.svg",
  kakao: "assets/icons/kakao.svg",
} as const;

export type IconList = keyof typeof ICONS;
