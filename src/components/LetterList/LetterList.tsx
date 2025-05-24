"use client";
import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { fetchAllLetter } from "@/services/letter";
import type { letter } from "@/types/letter";
import Box from "../Box/Box";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import { useSelectedLetter } from "@/store/useSelectedLetter";
import { useRouter } from "next/navigation";
import { handleApi } from "@/utils/handleApi";

const LetterList = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<import("swiper").Swiper | null>(null);
  const router = useRouter();
  const setSelectedLetter = useSelectedLetter((state) => state.setSelectedLetter);
  const [letters, setLetters] = useState<letter[]>([]);

  const dummy: letter[] = [
    {
      letterId: 1,
      content: "다들 좋은 하루 보내세요~",
      createdAt: "25.05.24",
    },
    {
      letterId: 2,
      content: "다들 좋은 하루 보내세요~",
      createdAt: "25.05.24",
    },
    {
      letterId: 3,
      content: "다들 좋은 하루 보내세요~",
      createdAt: "25.05.24",
    },
  ];

  useEffect(() => {
    const getLetters = async () => {
      try {
        const { data } = await handleApi(() => fetchAllLetter("마포구"));
        console.log(data);
        if (data) setLetters(data);
        else setLetters(dummy);
      } catch (error) {
        setLetters(dummy);
        console.error(error);
      }
    };
    getLetters();
  }, []);

  // useEffect(() => {
  //   const getLetters = async () => {
  //     try {
  //       const { data } = await handleApi(() => fetchAllLetter("마포구"));
  //       if (data) setLetters(data);
  //       else setLetters(dummy);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   getLetters();
  // }, []);

  const handlePickClick = () => {
    const letter = letters[activeIndex];
    setSelectedLetter(letter);
    router.push(`/letter/${letter.letterId}`);
  };
  if (letters.length < 3) {
    return (
      <div className="letter-list-static">
        {letters.map((letter, index) => (
          <Box
            key={letter.letterId}
            size={index === 0 ? "lg" : "md"}
            type="blue"
            timestamp={letter.createdAt ?? ""}
            content={letter.content}
            onClick={() => alert(`확인: ${letter.letterId}`)}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="letter-swiper-wrapper">
      <div className="letter-swiper-container">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          initialSlide={Math.floor(letters.length / 2)}
          spaceBetween={-80}
          coverflowEffect={{
            rotate: 15,
            stretch: -20,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          modules={[EffectCoverflow]}
          className="letter-swiper"
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {letters.map((letter, index) => (
            <SwiperSlide key={letter.letterId} className="letter-slide">
              <Box
                size={index === activeIndex ? "lg" : "md"}
                type="blue"
                timestamp={letter.createdAt ?? ""}
                content={letter.content}
                onClick={() => alert(`확인: ${letter.letterId}`)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="letter-actions">
        <div onClick={() => swiperRef.current?.slidePrev()}>
          <Icon name="prev" width={28} height={28} />
        </div>
        <Button type="fill" size="s" onClick={handlePickClick}>
          Pick
        </Button>
        <div onClick={() => swiperRef.current?.slideNext()}>
          <Icon name="next" width={28} height={28} />
        </div>
      </div>
    </div>
  );
};

export default LetterList;
