import React, { useRef, useState } from "react";
// Import Swiper React components

import ArticlesSlider from "../components/ArticlesSlider";

export default function Articles() {
    const [sec, setSec] = useState(0)
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

    const data = [
        { img: "https://altaawin.ysdesk.com/assets/altaawin/news/img5.png", title: "نصائح لفلر ناجح" },
        { img: "https://altaawin.ysdesk.com/assets/altaawin/news/img4.png", title: " عنايتك ببشرتك" },
        { img: "https://altaawin.ysdesk.com/assets/altaawin/news/img3.png", title: "نصائح مجانية لبشرة اكثر جاذبية" },
        { img: "https://altaawin.ysdesk.com/assets/altaawin/news/img2.png", title: "طرق الوقاية من امراض الكلى" },
        { img: "https://altaawin.ysdesk.com/assets/altaawin/blog_4.png", title: "الاسعافات الاولية لحالات الاغماء" },
        { img: "https://altaawin.ysdesk.com/assets/altaawin/news/img1.png", title: "الليزر الكربوني للوجه" },
        { img: "https://altaawin.ysdesk.com/assets/altaawin/blog_1.png", title: "الم عصب الاسنان" },

    ]
    function shuffle(array) {
        return array.slice().sort(() => Math.random() - 0.5);
    }
    return (
        <>
            <p className='text-center block xl:hidden     text-lg py-5 font-bold text-[#94a1a9]'>معلومات طبية</p>
            <div className=' xl:h-screen h-1/2 w-full  relative flex xl:flex-row flex-col-reverse'>
                <p className='text-center absolute xl:block hidden  translate-x-1/2 right-1/2  text-5xl py-5 font-bold text-[#94a1a9]'>معلومات طبية</p>
                <div className='xl:w-[80vw] w-full mt-10  flex items-center '>
                    {
                        sec === 0 ?
                            <>
                                <ArticlesSlider data={shuffle(data)} swiperRef={swiperRef} />

                            </>
                            : sec === 1 ?
                                <>
                                    <ArticlesSlider data={shuffle(data)} swiperRef={swiperRef} />

                                </>
                                :
                                <>
                                    <ArticlesSlider data={shuffle(data)} swiperRef={swiperRef} />

                                </>
                    }
                    <div className=" hidden xl:flex gap-10 h-full items-end px-20 pb-20 text-[#94a1a9]">
                        <div onClick={handlePrevClick} className="group transform transition-all duration-700 flex gap-3 flex-col cursor-pointer hover:-translate-x-1  ">
                            <img className=" opacity-50 group-hover:opacity-100 " src="https://www.vision2030.gov.sa/dist/img/icons/prev-arrow-gray.svg" alt="" />
                            <span className="opacity-0 group-hover:opacity-100 transform transition-all duration-700 ">PREV</span>
                        </div>
                        <div onClick={handleNextClick} className="group transform transition-all duration-700 flex gap-3 flex-col cursor-pointer hover:translate-x-1  ">
                            <img className=" opacity-50 group-hover:opacity-100 " src="https://www.vision2030.gov.sa/dist/img/icons/next-arrow-gray.svg" alt="" />
                            <span className="opacity-0 group-hover:opacity-100 transform transition-all duration-700 ">NEXT</span>
                        </div>

                    </div>
                </div>

                <div className='xl:w-[20vw] w-full border-l-0 xl:border-l-2 border-[#94a1a9]/20 xl:h-full relative '>
                    <div className={`transform hidden xl:block transition-all duration-700 w-16 h-[3px] ring-8 ring-white  rounded absolute bg-[#1f396c] top-[155px] -translate-x-1/2 ${sec === 0 ? 'top-[155px]' : sec === 1 ? 'top-[325px]' : 'top-[490px]'} `} ></div>
                    <div className='h-full w-full hidden xl:block'>
                        <ul className='xl:flex hidden flex-col xl:justify-evenly   items-center w-full h-full'>


                            <li><button onClick={() => setSec(0)} className={sec === 0 ? "xl:text-4xl text-[#1f396c] transform transition-all duration-700 -translate-x-4 " : "xl:text-4xl text-[#94a1a9] transform transition-all duration-700  "} >جمال</button></li>
                            <li><button onClick={() => setSec(1)} className={sec === 1 ? "xl:text-4xl text-[#1f396c] transform transition-all duration-700 -translate-x-4  " : "xl:text-4xl text-[#94a1a9] transform transition-all duration-700  "}>صحة</button></li>
                            <li><button onClick={() => setSec(2)} className={sec === 2 ? "xl:text-4xl text-[#1f396c] transform transition-all duration-700  -translate-x-4 " : "xl:text-4xl text-[#94a1a9] transform transition-all duration-700  "}>متفرقات</button></li>


                        </ul>
                    </div>
                    <ul className='flex xl:hidden xl:flex-col justify-evenly   w-full '>
                        <li><button onClick={() => setSec(0)} className={sec === 0 ? " text-[#1f396c] transform transition-all duration-700 border-b-2 border-[#1f396c] pb-1 " : " text-[#94a1a9] transform transition-all duration-700  "} >جمال</button></li>
                        <li><button onClick={() => setSec(1)} className={sec === 1 ? " text-[#1f396c] transform transition-all duration-700 border-b-2 border-[#1f396c] pb-1  " : " text-[#94a1a9] transform transition-all duration-700  "}>صحة</button></li>
                        <li><button onClick={() => setSec(2)} className={sec === 2 ? " text-[#1f396c] transform transition-all duration-700  border-b-2 border-[#1f396c] pb-1 " : " text-[#94a1a9] transform transition-all duration-700  "}>متفرقات</button></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
