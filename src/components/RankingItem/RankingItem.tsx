import { rank } from '@/types/ranking';
import React, { memo } from 'react';
import styles from './RankingItem.module.scss';
interface RankingItemProps {
  item: rank;
  idx: number;
}
const RankingItem = ({ item, idx }: RankingItemProps) => {
  const { region, letterCount } = item;
  const a = `idx${idx}`; // 예: idx0, idx1, ...

  return (
    <div className={`${styles.container} ${styles[a]}`}>
      <div className={styles.wordContainer}>
        <div className={styles.regionContainer}>
          <div className={styles.rankFont}>
            {idx + 1}
          </div>
          <div>
            <div className={styles.sub}>
              서울시
            </div>
            <div className={styles.main}>
              {region}
            </div>
          </div>
        </div>
        <div>
          <div className={styles.sub}>
            공유된 조각의 수
          </div>
          <div className={styles.main}>
            {letterCount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(RankingItem);