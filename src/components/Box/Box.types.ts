export type BoxColorType = "blue" | "yellow" | "red" | "pink" | "green";
export type BoxSizeType = "md" | "lg";

export interface BoxProps {
  type: BoxColorType;
  size?: BoxSizeType;
  children?: React.ReactNode;
}
