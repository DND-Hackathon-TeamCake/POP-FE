import React from 'react';
import styles from './MainBtn.module.scss';
import Icon from '../Icon/Icon';
import { IconList } from '@/constants/icons';

interface MainBtnProps {
  iconName: IconList;
  content: string;
  click?: () => void;
}
const MainBtn = ({ iconName, content, click }: MainBtnProps) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // ✅ 클릭 전파 막기
    click?.();
  };
  return (
    <div className={styles.container} onClick={handleClick}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Icon name={iconName} width={19} height={19.499} />
        <div>{content}</div>
      </div>
      <Icon name="rightArrow" width={19.2} height={19.2} />
    </div>
  );
};

export default MainBtn;