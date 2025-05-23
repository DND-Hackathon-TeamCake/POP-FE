import Image from "next/image";
import { ICONS, IconList } from "@/constants/icons";

interface IconProps {
  name: IconList;
  width?: number | string;
  height?: number | string;
  children?: React.ReactNode;
}

const Icon = ({ name, width = 128, height = 128, children }: IconProps) => {
  const src = ICONS[name];
  const numWidth = typeof width === "string" ? parseInt(width) : width;
  const numHeight = typeof height === "string" ? parseInt(height) : height;

  return (
    <div
      style={{
        position: "relative",
        width,
        height,
      }}
    >
      <Image
        src={src}
        alt={`${name} icon`}
        width={numWidth}
        height={numHeight}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          objectFit: "contain", // 이미지 비율 유지
        }}
        priority={false} // 필요에 따라 true로 설정
      />
      {children && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
            pointerEvents: "none",
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Icon;
