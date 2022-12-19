import React, { useEffect, useState } from 'react'
import teeth from '../images/Hero/teeth.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack } from 'react-icons/io';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Dropdown, Label, Select } from 'flowbite-react';
export default function HeaderSection() {
    useEffect(() => {
        AOS.init();
    }, [])
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
            <section class="bg-white pt-5 h-screen  dark:bg-gray-900">
                <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div class="mx-auto w-full place-self-center  flex-col justify-start lg:col-span-7">
                        <h1 data-aos="fade-up" class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-right">{content[slide].title}</h1>
                        <p data-aos="fade-up" class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-right">{content[slide].desc}</p>
                        <Link class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-full hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            <IoIosArrowBack size={50} /> المزيد
                        </Link>
                    </div>
                    <div class="  lg:col-span-5 lg:flex lg:justify-center  lg:items-center">
                        <Swiper
                            direction={"vertical"}
                            effect={"coverflow"}
                            grabCursor={true}
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
                            pagination={true}
                            modules={[EffectCoverflow, Pagination]}
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
            <div className='container flex justify-end mx-auto h-16 p-5 bg-slate-400  -mt-12 mb-20 '>
                <div className='flex justify-center items-end flex-col'>


                    <Label
                        value="المجمعات"
                    />

                    <select
                        className='rounded-none '

                    >
                        <option className='p-3 '>
                            المجمع الطبية 1
                        </option>
                        <option>
                            لمجمع الطبية 2
                        </option>
                        <option>
                            المجمع الطبية 3
                        </option>

                    </select>

                </div>
            </div>
        </>
    )
}
