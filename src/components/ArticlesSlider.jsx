import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
export default function ArticlesSlider({ swiperRef, data }) {

    return (
        <>

            <Swiper
                key={Math.random()}
                data-aos="fade-right"
                loop={true}
                ref={swiperRef}
                slidesPerView={3}
                spaceBetween={30}
                className="mySwiper ">
                {
                    data?.map(item => {
                        return (
                            <>
                                <SwiperSlide className="!w-1/3">
                                    <article class="group ">
                                        <img
                                            alt="Lava"
                                            src={item?.img}
                                            class="xl:h-96 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
                                        />

                                        <div class="p-4">
                                            <a href="#">
                                                <h3 class="xl:text-lg font-medium text-end   text-gray-900 dark:text-white">
                                                    {item?.title}
                                                </h3>
                                            </a>
                                        </div>
                                    </article>
                                </SwiperSlide>
                            </>
                        )
                    })
                }





            </Swiper>

        </>
    )
}
