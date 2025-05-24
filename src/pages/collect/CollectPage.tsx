'use client'
import Box from '@/components/Box/Box';
import { BoxColorType } from '@/components/Box/Box.types';
import Title from '@/components/Title/Title';
// import { fetchStoreLetter } from '@/services/letter';
import { letter } from '@/types/letter';
// import { handleApi } from '@/utils/handleApi';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import styles from "./CollectPage.module.scss";

const CollectPage = () => {
  const [collects, setCollects] = useState<letter[]>([]);
  const router = useRouter();
  const boxColor: { [key: number]: BoxColorType } = {
    0: "red",
    1: "yellow",
    2: "blue",
    3: "green",
    4: "pink"
  };

  const dummy = [
    {
      content: "다들 좋은 하루 보내세요~",
      imageUrl: "https://gongmuin-bucket.s3.ap-northeast-2.amazonaws.com/images/78e57235-a6ce-48ad-a36c-fbd162cd41d0.jpg",
      region: "마포구",
      createdAt: "25.05.24",
      letterId: 1
    },
    {
      content: "다들 좋은 하루 보내세요~",
      imageUrl: null,
      region: "은평구",
      createdAt: "25.05.24",
      letterId: 2
    }
  ]
  useEffect(() => {
    // const fetchCollects = async () => {
    //   const { data } =await handleApi(()=> fetchStoreLetter());
    //   if(data) setCollects(data);
    // }
    // fetchCollects();
    setCollects(dummy);
  }, []);
  return (
    <div>
      <Title title={"Collected my POP's"} description={`${collects.length}개의 조각들을 수집했어요`} />
      <div className={styles.container}>
        {collects.map((item, idx) => (
          <Box type={boxColor[idx % 5]} size='col' timestamp={item.createdAt!} content={item.content} onClick={() => router.push(`/letter/${item.letterId}`)} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default CollectPage;