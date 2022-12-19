import React from 'react'
import { Link } from 'react-router-dom'

export default function NavigatoinBar() {
    return (
        <div className='h-20 z-50  fixed flex justify-around items-center  text-white bg-gradient-to-b from-black  w-screen '>
            <img className='h-14 ' src="https://altaawin.ysdesk.com/assets/altaawin/logo-light-taawin.png" alt="" />
            <ul className='flex justify-center gap-5'>
                <Link>معلومات طبية</Link>
                <Link>الخدمات الإلكترونية</Link>
                <Link>منشأتنا الطبية</Link>
                <Link>من نحن</Link>
                <Link>الرئيسية</Link>
            </ul>
            <div></div>
        </div>
    )
}
