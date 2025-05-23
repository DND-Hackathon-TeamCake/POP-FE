export const ICONS = {
  test: "/assets/icons/test.svg",
  kakao: "assets/icons/kakao.svg",

  box: "/assets/icons/box.svg",
  pencil: "/assets/icons/pencil.svg",
  solar: "/assets/icons/solar.svg",
  rightArrow: "/assets/icons/rightArrow.svg",
  vector: "/assets/icons/vector.svg",
  motif: "/assets/icons/motif.svg",
  "motif1-blue": "/assets/icons/motif1-blue.svg",
  "motif1-green": "/assets/icons/motif1-green.svg",
  "motif1-purple": "/assets/icons/motif1-purple.svg",
  "motif1-red": "/assets/icons/motif1-red.svg",
  "motif1-yellow": "/assets/icons/motif1-yellow.svg",

  "motif2-blue": "/assets/icons/motif2-blue.svg",
  "motif2-green": "/assets/icons/motif2-green.svg",
  "motif2-purple": "/assets/icons/motif2-purple.svg",
  "motif2-red": "/assets/icons/motif2-red.svg",
  "motif2-yellow": "/assets/icons/motif2-yellow.svg",

  "motif3-blue": "/assets/icons/motif3-blue.svg",
  "motif3-green": "/assets/icons/motif3-green.svg",
  "motif3-purple": "/assets/icons/motif3-purple.svg",
  "motif3-red": "/assets/icons/motif3-red.svg",
  "motif3-yellow": "/assets/icons/motif3-yellow.svg",

  "motif4-blue": "/assets/icons/motif4-blue.svg",
  "motif4-green": "/assets/icons/motif4-green.svg",
  "motif4-purple": "/assets/icons/motif4-purple.svg",
  "motif4-red": "/assets/icons/motif4-red.svg",
  "motif4-yellow": "/assets/icons/motif4-yellow.svg",

  "motif5-blue": "/assets/icons/motif5-blue.svg",
  "motif5-green": "/assets/icons/motif5-green.svg",
  "motif5-purple": "/assets/icons/motif5-purple.svg",
  "motif5-red": "/assets/icons/motif5-red.svg",
  "motif5-yellow": "/assets/icons/motif5-yellow.svg",

  next: "/assets/icons/next.svg",
  prev: "/assets/icons/prev.svg",
  back: "/assets/icons/back.svg",

  defaultPop: "assets/images/default-pop.svg",
  main: "assets/images/main.svg",
} as const;

export type IconList = keyof typeof ICONS;
