import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup';

export default function Numbers() {



    return (
        <>
            <p className='text-[#94a1a9] font-bold text-center py-4 mt-3 text-5xl'>إحصائيات وأرقام</p>
            <div className='  bg-gradient-to-tr from-[#2882c3] to-[#1f396c] container my-5 rounded-3xl mx-auto p-5 flex flex-wrap flex-row-reverse justify-around items-center '>
                <div className=' flex flex-col justify-center text-[10px] md:text-lg'>
                    <img className='h-10 w-10 md:h-24 md:w-24 ' src="https://altaawin.ysdesk.com/assets/altaawin/statistics_and_numbers/accreditation.png" alt="" />
                    <p className='text-center text-white  font-bold'>الاعتمادات</p>
                    <p className='text-center text-white  font-bold'>+ <CountUp end={300} duration={7} /></p>
                </div>
                <div className='flex flex-col justify-center text-[10px] md:text-lg'>
                    <img className='h-10 w-10 md:h-24 md:w-24 ' src="https://altaawin.ysdesk.com/assets/altaawin/statistics_and_numbers/awards.png" alt="" />
                    <p className='text-center text-white  font-bold'>عدد الجوائز</p>
                    <p className='text-center text-white  font-bold'>+ <CountUp end={30} duration={5} /></p>
                </div>
                <div className='flex flex-col justify-center text-[10px] md:text-lg'>
                    <img className='h-10 w-10 md:h-24 md:w-24 ' src="https://altaawin.ysdesk.com/assets/altaawin/statistics_and_numbers/staff.png" alt="" />
                    <p className='text-center text-white  font-bold'>عدد العاملين</p>
                    <p className='text-center text-white  font-bold'>+ <CountUp end={130} duration={5} /></p>
                </div>
                <div className='flex flex-col justify-center text-[10px] md:text-lg'>
                    <img className='h-10 w-10 md:h-24 md:w-24 ' src="https://altaawin.ysdesk.com/assets/altaawin/statistics_and_numbers/doctors.png" alt="" />
                    <p className='text-center text-white  font-bold'>عدد الأطباء</p>
                    <p className='text-center text-white  font-bold'>+ <CountUp end={200} duration={6} /></p>
                </div>
                <div className='flex flex-col justify-center text-[10px] md:text-lg'>
                    <img className='h-10 w-10 md:h-24 md:w-24 ' src="https://altaawin.ysdesk.com/assets/altaawin/statistics_and_numbers/clinics.png" alt="" />
                    <p className='text-center text-white  font-bold'>عدد العيادات</p>

                    <p className='text-center text-white  font-bold'>+ <CountUp end={150} duration={5.5} /></p>
                </div>
                <div className='flex flex-col justify-center text-[10px] md:text-lg'>
                    <img className='h-10 w-10 md:h-24 md:w-24 ' src="https://altaawin.ysdesk.com/assets/altaawin/statistics_and_numbers/beds.png" alt="" />
                    <p className='text-center text-white  font-bold'>عدد الأسرة</p>
                    <p className='text-center text-white  font-bold'>+ <CountUp end={50} duration={5} /></p>
                </div>
            </div>
        </>
    )
}
