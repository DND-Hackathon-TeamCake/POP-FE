'use client'
import React, { useEffect, useState } from 'react';
import styles from './RankingPage.module.scss';
import { rank } from '@/types/ranking';
// import { handleApi } from '@/utils/handleApi';
// import { fetchRanking } from '@/services/ranking';
import RankingItem from '@/components/RankingItem/RankingItem';
import Title from '@/components/Title/Title';

const getTodayKST = (): string => {
  const formatter = new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const parts = formatter.formatToParts(new Date());
  const year = parts.find(p => p.type === "year")?.value;
  const month = parts.find(p => p.type === "month")?.value;
  const day = parts.find(p => p.type === "day")?.value;

  return `${year}.${month}.${day}`;
};

const RankingPage = () => {
  const [rankings, setRankings] = useState<rank[]>([]);

  const dummy = [{
    "region": "마포구",
    "letterCount": 10
  },
  {
    "region": "강남구",
    "letterCount": 5
  },
  {
    "region": "은평구",
    "letterCount": 1
  }]
  useEffect(() => {
    // const fetchRankData = async () => {
    //   const { data } = await handleApi(() => fetchRanking());
    //   if (data) setRankings(data);
    // }
    // fetchRankData();
    setRankings(dummy);
  }, [])
  return (
    <div>
      <Title title="Ranking of TOP3" description={`${getTodayKST()} 기준`} />
      <div className={styles.rankwrap}>
        {rankings?.length > 0 ?
          rankings?.map((item, idx) => (
            <RankingItem item={item} idx={idx} key={idx} />
          ))
          :
          <div>랭킹이 없습니다.</div>
        }
      </div>
    </div>
  );
};

export default RankingPage;