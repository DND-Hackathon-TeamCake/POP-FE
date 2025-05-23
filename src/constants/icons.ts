export const ICONS = {
  test: "/assets/icons/test.svg",
} as const;

export type IconList = keyof typeof ICONS;
