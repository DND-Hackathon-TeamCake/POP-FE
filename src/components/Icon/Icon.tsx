import { ICONS, IconList } from "@/constants/icons";

interface IconProps {
  name: IconList;
  width?: number | string;
  height?: number | string;
}

// 사용법: <Icon name="test" width={100} height={100} />
const Icon = ({ name, width = 128, height = 128 }: IconProps) => {
  return (
    <div style={{ width, height }}>
      <img src={ICONS[name]} alt={`${name} icon`} width="100%" height="100%" loading="lazy" />
    </div>
  );
};

export default Icon;
