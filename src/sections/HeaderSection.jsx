import React, { useEffect, useState } from 'react'
import teeth from '../images/Hero/teeth.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack } from 'react-icons/io';
import { SlLocationPin } from 'react-icons/sl';
import { FaFirstAid } from 'react-icons/fa';
import { BsCalendarDateFill } from 'react-icons/bs';
// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/effect-fade";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
// this comment is for me
export default function HeaderSection() {


    const [slide, setSlide] = useState(0)

    const content = [
        { title: "عيادة الباطنية", desc: "تشخيص وعلاج الأمراض المزمنة" },
        { title: "عيادة تقويم الأسنان", desc: "الرعاية، الوقاية، والابتسامة الجميلة" },
        { title: "قسم المختبر والتحاليل", desc: "قسم المختبر والتحاليل" },
        { title: "عيادة طب العيون", desc: "تعامل مع أمراض وجراحة العيون والمسالك البصرية" },
        { title: "عيادة الأسنان", desc: "الرعاية، الوقاية، والابتسامة الجميلة هي مانحرص على إعطائه لعملائنا الكرام في قسم الأسنان" },
        { title: "عيادة الطب العام", desc: "تقديم مجموعة واسعة من الخِدْمَات الوقائية" },

    ]

    const info = () => {
        return (
            <>


            </>
        )
    }
    return (
        <>
            <section class="bg-[url(https://www.vision2030.gov.sa/dist/img/home/vision-section-bg.png)] pt-5 h-full  pb-7  dark:bg-gray-900">
                <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div class="mx-auto w-full place-self-center py-10 md flex-col justify-start lg:col-span-7">
                        <h1 data-aos="fade-up" class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white text-right">{content[slide].title}</h1>
                        <p data-aos="fade-up" class="max-w-2xl mb-6 font-light  lg:mb-8 md:text-lg lg:text-xl text-white text-right">{content[slide].desc}</p>
                        <Link class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-full hover:text-black hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            <IoIosArrowBack size={50} /> المزيد
                        </Link>
                    </div>
                    <div class="  lg:col-span-5 lg:flex lg:justify-center  lg:items-center">
                        <Swiper
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            direction={"vertical"}
                            effect={"coverflow"}
                            grabCursor={false}
                            centeredSlides={true}
                            slidesPerView={"1"}

                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            onSlideChange={e => setSlide(e.activeIndex)}

                            modules={[EffectCoverflow, Autoplay]}
                            className="mySwiper h-[500px]"
                        >
                            <SwiperSlide className='overflow-hidden relative rounded-3xl'>
                                <img className='absolute left-0 -top-12 w-full' src="https://altaawin.ysdesk.com/assets/altaawin/ser7.png" />
                            </SwiperSlide>
                            <SwiperSlide className='overflow-hidden relative rounded-3xl'>
                                <img className='absolute left-0 -top-12 w-full' src="https://altaawin.ysdesk.com/assets/altaawin/ser4.png" />
                            </SwiperSlide>
                            <SwiperSlide className='overflow-hidden relative rounded-3xl'>
                                <img className='absolute left-0 -top-12  w-full' src="https://altaawin.ysdesk.com/assets/altaawin/ser5.png" />
                            </SwiperSlide>
                            <SwiperSlide className='overflow-hidden relative rounded-3xl'>
                                <img src="https://altaawin.ysdesk.com/assets/altaawin/ser6.png" />
                            </SwiperSlide>
                            <SwiperSlide className='overflow-hidden relative rounded-3xl'>
                                <img className='absolute left-0 -top-12 w-full' src="https://altaawin.ysdesk.com/assets/altaawin/ser1.png" />
                            </SwiperSlide>
                            <SwiperSlide className='overflow-hidden relative rounded-3xl'>
                                <img className='absolute left-0 -top-12 w-full' src="https://altaawin.ysdesk.com/assets/altaawin/ser2.png" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>

            </section>
        </>
    )
}
