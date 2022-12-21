import React from 'react'
import { BsArrowUpCircle, BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function FooterNav() {
    return (
        <div className='h-52 bg-[#1F395F] flex flex-col justify-between !font-sans'>
            <div className='flex items-center justify-around p-5'>
                <div className='text-white flex items-center gap-2'><BsArrowUpCircle className='cursor-pointer hover:text-blue-500 transform transition-all duration-700' size={40} /><span className='text-lg'>إلى الأعلى</span></div>
                <ul className='md:flex justify-center items-center gap-5 text-white hidden  md:text-lg'>
                    <Link>معلومات طبية</Link>
                    <Link>الخدمات الإلكترونية</Link>
                    <Link>منشأتنا الطبية</Link>
                    <Link>من نحن</Link>
                    <Link>الرئيسية</Link>
                </ul>
                <div className='flex-flex-col'>
                    <img className='h-16' src="https://altaawin.ysdesk.com/assets/altaawin/taawin-logo-light.png" alt="" />

                </div>
            </div>
            <div className='flex justify-around items-center mb-5 '>
                <div className='flex gap-5'>
                    <BsFacebook color='white' size={30} />
                    <BsTwitter color='white' size={30} />
                    <BsInstagram color='white' size={30} />
                </div>
                <span className='text-white !font-light text-[10px] md:text-sm'>جميع الحقوق محفوظة لدى مجمعات التعاون الطبية &copy; 2022  </span>
                <div className='md:flex hidden gap-4'>
                    <img className='h-10' src="https://altaawin.ysdesk.com/assets/images/element/google-play.svg" alt="" />
                    <img className='h-10' src="https://altaawin.ysdesk.com/assets/images/element/app-store.svg" alt="" />
                </div>
            </div>
        </div>
    )
}
