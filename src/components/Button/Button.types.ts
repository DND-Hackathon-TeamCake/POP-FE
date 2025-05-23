export type ButtonType = "fill" | "button-kakao";

export type ButtonSize = "s" | "m" | "l";

export interface ButtonProps {
  children: React.ReactNode;
  type: ButtonType;
  size: ButtonSize;
  disabled?: boolean;
  onClick?: () => void;
  width?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
