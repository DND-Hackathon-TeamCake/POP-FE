export type ButtonType = "fill";

export type ButtonSize = "l" | "m" | "s";

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
