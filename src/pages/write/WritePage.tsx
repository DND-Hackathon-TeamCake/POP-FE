'use client'
import React, { useRef } from 'react';
import styles from './WritePage.module.scss';
import Input from '@/components/Input/Input';
import useLocation from '@/hooks/useLocation';
import { handleApi } from '@/utils/handleApi';
import { generateLetter } from '@/services/letter';
import { letter } from '@/types/letter';
import { useRouter } from 'next/navigation';
const WritePage = () => {
  const contentRef = useRef<HTMLInputElement>(null);
  // const fileRef = useRef<HTMLInputElement>(null);
  const { depthName } = useLocation();
  const router = useRouter();
  const send = async () => {
    const writing: letter = {
      content: contentRef.current!.value,
      // imageUrl: fileRef.current?.files![0] ? fileRef.current?.files[0] : undefined,
      region: depthName
    }
    const { data } = await handleApi(() => generateLetter(writing));
    if (data === 200) router.push("/main");
  }

  return (
    <div style={{ height: "100%", display: 'flex', flexDirection: 'column', gap: "200px " }} >
      <div className={styles.inputArea}>
        <div className={styles.inputContainer}>
          <div className={styles.text}>
            기억하고 싶은 순간이 있었다면<br />우리 지역 이웃에게 공유해요
          </div>
          <Input placeholder='내용을 입력해 주세요.' type='text' />
        </div>
        <div className={styles.inputContainer}>

          <div className={styles.text}>
            (선택)오늘 봤던 그 장면,<br />우리 지역에서 함께 나눠볼래요?
          </div>
          <Input placeholder='내용을 입력해 주세요.' type='file' />
        </div>
      </div>
      <button className={styles.submit} onClick={send}>발송하기</button>
    </div >
  );
};

export default WritePage;