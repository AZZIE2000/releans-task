import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import img1 from '../images/cards/1.png'
import img2 from '../images/cards/2.png'
import img3 from '../images/cards/3.png'
import img4 from '../images/cards/4.png'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { RiArrowLeftUpLine } from 'react-icons/ri';
export default function OffersSection() {




    const swiperRef = useRef(null);
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
        <>
            <div className='flex md:justify-between py-10 bg-[url(https://www.vision2030.gov.sa/dist/img/home/vision-section-bg.png)] '>

                <div className=' md:w-[75%] w-[100%] '>

                    <Swiper
                        breakpoints={{
                            "@0.00": {
                                slidesPerView: 1,
                                spaceBetween: 0,


                            },
                            "@0.75": {
                                slidesPerView: 1,
                                spaceBetween: 0,

                            },
                            "@1.00": {
                                slidesPerView: 2,
                                spaceBetween: 20,

                            },
                            "@1.50": {
                                slidesPerView: 3,
                                spaceBetween: 30,

                            },
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}


                        centeredSlides={true}
                        pagination={{
                            clickable: true
                        }}

                        speed={1000}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper md:px-32 p-0 h-[600px]"
                        loop
                        ref={swiperRef}
                    >
                        <SwiperSlide className='mt-10 flex justify-center' >
                            <div class="  !border-none py-10 rounded-3xl flip-card">
                                <div class="  rounded-3xl flip-card-inner">
                                    <div class=" relative rounded-3xl flip-card-front">
                                        <button className='absolute rounded-full p-2 bottom-0 left-5 ring-4 ring-blue-400   '>
                                            <RiArrowLeftUpLine size={30} className="text-blue-400" />
                                        </button>
                                        <img className='h-[500px] !shadow-xl shadow-black rounded-3xl' src={img1} alt="Avatar" />
                                    </div>
                                    <div class=" rounded-3xl flip-card-back flex flex-col items-center justify-center gap-4">
                                        <h1>اغتنم الفرصة الآن</h1>
                                        <p>تواصل معنا</p>
                                        <p>azzam.faraj0@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='flex justify-center' >
                            <div class="  !border-none py-10 rounded-3xl flip-card">
                                <div class="  rounded-3xl flip-card-inner">
                                    <div class=" relative rounded-3xl flip-card-front">
                                        <button className='absolute rounded-full p-2 bottom-0 left-5 ring-4 ring-blue-400   '>
                                            <RiArrowLeftUpLine size={30} className="text-blue-400" />
                                        </button>
                                        <img className='h-[500px] !shadow-xl shadow-black rounded-3xl' src={img2} alt="Avatar" />
                                    </div>
                                    <div class=" rounded-3xl flip-card-back flex flex-col items-center justify-center gap-4">
                                        <h1>اغتنم الفرصة الآن</h1>
                                        <p>تواصل معنا</p>
                                        <p>azzam.faraj0@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='mt-10 flex justify-center' >
                            <div class="  !border-none py-10 rounded-3xl flip-card">
                                <div class="  rounded-3xl flip-card-inner">
                                    <div class=" relative rounded-3xl flip-card-front">
                                        <button className='absolute rounded-full p-2 bottom-0 left-5 ring-4 ring-blue-400   '>
                                            <RiArrowLeftUpLine size={30} className="text-blue-400" />
                                        </button>
                                        <img className='h-[500px] !shadow-xl shadow-black rounded-3xl' src={img3} alt="Avatar" />
                                    </div>
                                    <div class=" rounded-3xl flip-card-back flex flex-col items-center justify-center gap-4">
                                        <h1>اغتنم الفرصة الآن</h1>
                                        <p>تواصل معنا</p>
                                        <p>azzam.faraj0@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='flex justify-center' >
                            <div class="  !border-none py-10 rounded-3xl flip-card">
                                <div class="  rounded-3xl flip-card-inner">
                                    <div class=" relative rounded-3xl flip-card-front">
                                        <button className='absolute rounded-full p-2 bottom-0 left-5 ring-4 ring-blue-400   '>
                                            <RiArrowLeftUpLine size={30} className="text-blue-400" />
                                        </button>
                                        <img className='h-[500px] !shadow-xl shadow-black rounded-3xl' src={img4} alt="Avatar" />
                                    </div>
                                    <div class=" rounded-3xl flip-card-back flex flex-col items-center justify-center gap-4">
                                        <h1>اغتنم الفرصة الآن</h1>
                                        <p>تواصل معنا</p>
                                        <p>azzam.faraj0@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className='md:flex hidden  flex-col justify-evenly  border-black/20 items-center gap-3 w-[25%] bg-no-repeat bg-cover '>
                    <p className='text-white font-bold text-base text-center md:text-4xl'>عروض و باقات</p>

                    <MdArrowForwardIos className='hover:text-red-600 cursor-pointer text-white' size={70} onClick={handleNextClick} />
                    {/* bg-[url(https://www.vision2030.gov.sa/dist/img/home/giga-projects-bg.png)] */}

                </div>
            </div>
        </>
    )
}
