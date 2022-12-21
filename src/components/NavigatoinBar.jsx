import React from 'react'
import { Link } from 'react-router-dom'

export default function NavigatoinBar() {
    return (
        <div className='h-20 z-50   flex justify-around items-center  text-white bg-gradient-to-b from-black to-slate-500  w-full '>
            <div></div>
            <ul className='flex justify-center gap-2 md:gap-5 text-[10px]  sm:text-[15px] md:text-[13px] '>
                <Link>معلومات طبية</Link>
                <Link>الخدمات الإلكترونية</Link>
                <Link>منشأتنا الطبية</Link>
                <Link>من نحن</Link>
                <Link>الرئيسية</Link>
            </ul>
            <img className='h-14 ' src="https://altaawin.ysdesk.com/assets/altaawin/logo-light-taawin.png" alt="" />
        </div>
    )
}
