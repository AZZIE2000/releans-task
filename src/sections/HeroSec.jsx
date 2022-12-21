import React, { useRef, useState } from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Autoplay } from "swiper";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';
export default function HeroSec() {
    const [slide, setSlide] = useState(0)
    const swiperRef = useRef()
    const handleNextClick = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };
    const handlePrevClick = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };
    return (
        <div className='  relative'>

            <Swiper
                ref={swiperRef}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"1"}
                onSlideChange={e => { setSlide(e.realIndex) }}
                pagination={true}
                modules={[Autoplay]}
                className="mySwiper h-full  "
            >
                <SwiperSlide>
                    <img src="https://h.top4top.io/p_2546vmve11.png" alt="" />

                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.top4top.io/p_254679fka2.png" alt="" />

                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://j.top4top.io/p_2546pu7fg3.png" alt="" />

                </SwiperSlide>

            </Swiper>
            <div className='absolute  flex gap-5 items-center backdrop-blur  rounded  right-1/2 translate-x-1/2 bottom-10 z-40 '>

                <HiOutlineArrowLeft onClick={handleNextClick} className='md:h-16 md:w-16  h-10 w-10 text-white hover:text-red-600 cursor-pointer transform transition-all duration-700 hover:-translate-x-2' />
                <span className='text-white font-bold text-lg'>{slide + 1}/3</span>
                <HiOutlineArrowRight onClick={handlePrevClick} className='md:h-16 md:w-16 h-10 w-10 text-white hover:text-red-600 cursor-pointer transform transition-all duration-700 hover:translate-x-2 ' />
            </div>
        </div>
    )
}
