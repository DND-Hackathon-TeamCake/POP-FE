import { ICONS, IconList } from "@/constants/icons";

interface IconProps {
  name: IconList;
  width?: number | string;
  height?: number | string;
}

const Icon = ({ name, width = 128, height = 128 }: IconProps) => {
  const src = ICONS[name];
  return (
    <img
      src={src}
      alt={`${name} icon`}
      width={width}
      height={height}
      loading="lazy"
    />
  );
};

export default Icon;
