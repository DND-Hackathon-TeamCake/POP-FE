import { ICONS, IconList } from "@/constants/icons";

interface IconProps {
  name: IconList;
  width?: number | string;
  height?: number | string;
  children?: React.ReactNode;
}

const Icon = ({ name, width = 128, height = 128, children }: IconProps) => {
  const src = ICONS[name];
  return (
    <div
      style={{
        position: "relative",
        width,
        height,
      }}
    >
      <img
        src={src}
        alt={`${name} icon`}
        width="100%"
        height="100%"
        style={{ display: "block" }}
        loading="lazy"
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
            pointerEvents: "none", // 텍스트 클릭 막기
          }}
        >
          {children}
        </div>
      )}
    </div>

  );
};

export default Icon;
