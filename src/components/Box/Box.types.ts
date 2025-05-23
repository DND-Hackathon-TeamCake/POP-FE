export type BoxColorType = "blue" | "yellow" | "red" | "pink" | "green";
export type BoxSizeType = "md" | "lg" | "col";

export interface BoxProps {
  type: BoxColorType;
  size?: BoxSizeType;
  timestamp: string;
  content: string;
  onClick: () => void;
  children?: React.ReactNode;
}
