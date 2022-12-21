import React from 'react'
import { BsCalendarDateFill } from 'react-icons/bs'
import { FaFirstAid } from 'react-icons/fa'
import { SlLocationPin } from 'react-icons/sl'
import Select from 'react-select'
export default function BookSec() {
    const places = [
        { value: 'المجمع-الطبية-1', label: 'المجمع الطبية 1' },
        { value: 'المجمع-الطبية-2', label: 'المجمع الطبية 2' },
        { value: 'المجمع-الطبية-3', label: 'المجمع الطبية 3' }
    ]
    const clinics = [
        { value: 'عيادة الطب العام', label: 'عيادة الطب العام' },
        { value: 'عيادة الباطنية', label: 'عيادة الباطنية' },
        { value: 'عيادة العظام', label: 'عيادة العظام' },
        { value: 'عيادة طب الأطفال', label: 'عيادة طب الأطفال' },


    ]
    return (

        <div className=' flex flex-col p-8 justify-between mx-auto    bg-[url(https://www.vision2030.gov.sa/dist/img/home/giga-projects-bg.png)] bg-no-repeat bg-cover    '>
            <p className='text-right pb-5 font-bold text-3xl'>احجز موعدك الآن</p>
            <div className='flex  justify-between mx-auto items-end lg:items-center w-full'>

                <button className='p-5 px-7 mt-9 bg-black hover:bg-white hover:text-black hover:ring-2 hover:ring-black  text-white rounded whitespace-nowrap '>حجز الآن</button>
                <div className='flex flex-wrap justify-end gap-10 md:gap-28'>

                    <div className='flex flex-col gap-4 w-52 justify-center'>

                        <label className='gap-2 items-center justify-end flex'><span>التاريخ</span> <BsCalendarDateFill className='text-red-800' /></label>
                        <input className=' rounded border-gray-400/50' type="datetime-local" />
                    </div>
                    <div className='flex flex-col gap-4 w-52 justify-center '>

                        <label className='gap-2 items-center justify-end flex'><span>العيادات</span> <FaFirstAid className='text-red-800' /></label>
                        <Select className='z-50' isRtl placeholder="إختر عيادة ..." options={clinics} />
                    </div>
                    <div className='flex flex-col gap-4 w-52 justify-center  '>
                        <label className='gap-2 items-center justify-end flex'><span>المجمعات</span> <SlLocationPin className='text-red-800' /></label>
                        <Select className='z-50' isRtl placeholder="إختر المجمع ..." options={places} />
                    </div>
                </div>
            </div>
        </div>
    )
}
