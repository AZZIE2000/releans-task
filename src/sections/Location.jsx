
import React, { useState } from 'react'

export default function Location() {
    const [map, setMap] = useState(0)
    return (
        <div className=' flex  flex-col xl:flex-row-reverse min-h-[500px]   w-full bg-[url(https://www.vision2030.gov.sa/dist/img/home/giga-projects-bg.png)] bg-no-repeat bg-cover'>
            <div className='xl:w-[40vw] w-full flex flex-col justify-center xl:justify-evenly '>
                <p className='text-3xl xl:text-5xl  pt-8 xl:pt-0 xl:text-right text-center xl:pr-20 text-white font-bold'>زوروا مواقعنا</p>
                <ul className='flex xl:flex-col xl:items-end flex-row-reverse justify-center gap-10 xl:py-0 py-7   xl:pr-20 '>
                    <li onClick={() => setMap(0)} className='text-white text-lg group flex items-center gap-10 transform transition-all duration-700'> <span className={`h-1 w-20 bg-white transform transition-all duration-700 hidden xl:block ${map === 0 ? "-translate-x-5 opacity-100" : "opacity-0"}`}></span><span className={`font-bold opacity-50 cursor-pointer  transform transition-all duration-700  xl:text-4xl ${map === 0 ? "opacity-100 border-b-4 xl:border-none xl:-translate-x-3  " : "group-hover:opacity-80"}`}>التعاون 1</span> </li>
                    <li onClick={() => setMap(1)} className='text-white text-lg group flex items-center gap-10 transform transition-all duration-700'> <span className={`h-1 w-20 bg-white transform transition-all duration-700 hidden xl:block ${map === 1 ? "-translate-x-5 opacity-100" : "opacity-0"}`}></span><span className={`font-bold opacity-50 cursor-pointer  transform transition-all duration-700  xl:text-4xl ${map === 1 ? "opacity-100 border-b-4 xl:border-none xl:-translate-x-3 " : "group-hover:opacity-80"}`}>التعاون 2</span> </li>
                    <li onClick={() => setMap(2)} className='text-white text-lg group flex items-center gap-10 transform transition-all duration-700'> <span className={`h-1 w-20 bg-white transform transition-all duration-700 hidden xl:block ${map === 2 ? "-translate-x-5 opacity-100" : "opacity-0"}`}></span><span className={`font-bold opacity-50 cursor-pointer  transform transition-all duration-700  xl:text-4xl ${map === 2 ? "opacity-100 border-b-4 xl:border-none xl:-translate-x-3 " : "group-hover:opacity-80"}`}>التعاون 3</span> </li>

                </ul>
            </div>
            <div className='xl:w-[60vw] flex justify-center'>
                {
                    map === 0 ?

                        <iframe key={Math.random()} data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            // data-aos-delay="100"
                            data-aos-duration="500"
                            data-aos-offset="0" className='text-center xl:!h-full !w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29125.56765037175!2d47.28319624734711!3d24.14731351575705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e254f0c249a0051%3A0x700e183ef681a2ca!2z2YXYs9iq2YjYtdmBINin2YTYqti52KfZiNmGINin2YTYt9io2YrZiiAoMSk!5e0!3m2!1sen!2sus!4v1671628086780!5m2!1sen!2sus" width="400" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        : map === 1 ?

                            <iframe key={Math.random()} data-aos="fade-zoom-in"
                                data-aos-easing="ease-in-back"
                                // data-aos-delay="100"
                                data-aos-duration="500"
                                data-aos-offset="0" className='text-center xl:!h-full !w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.697182263663!2d47.29856549993627!3d24.14727047934079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e254f65c2eb5607%3A0x5e4d382e37ca6d09!2z2YXYs9iq2YjYtdmBINin2YTYqti52KfZiNmGINmi!5e0!3m2!1sen!2sus!4v1671628011132!5m2!1sen!2sus" width="400" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            :
                            <iframe key={Math.random()} data-aos="fade-zoom-in"
                                data-aos-easing="ease-in-back"
                                // data-aos-delay="100"
                                data-aos-duration="500"
                                data-aos-offset="0" className='text-center xl:!h-full !w-full' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d466651.44830511784!2d47.05026462890625!3d23.970535968073442!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdc8e76ccfe4bef41!2z2YXYs9iq2YjYtdmBINin2YTYqti52KfZiNmGIDM!5e0!3m2!1sen!2sus!4v1671627820139!5m2!1sen!2sus" width="400" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                }
            </div>


        </div>
    )
}
