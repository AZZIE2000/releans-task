import React from 'react'
import CardPerson from '../components/CardPerson'
import doc1 from '../images/doctors/1.png'
import doc2 from '../images/doctors/2.png'
import doc3 from '../images/doctors/3.png'
export default function KaderSec() {

    const data = [
        { img: doc1, name: "رائد القحطاني", title: "استشاري جراحة الكلى وامراض اذكورة والعقم", info: 'البورد السعودي في جراحة الكلى والمسالك' },
        { img: doc2, name: "عماد الجهني", title: "الجراحة العامة", info: 'استاذ مساعد جامعة الأمير سطام' },
        { img: doc3, name: "عبدالرحمن خرمي", title: "استشاري باطنية والروماتيزم", info: 'استاذ مساعد جامعة الأمير سطام' },
    ]

    return (
        <>
            <p data-aos="zoom-in" className='text-center text-5xl py-5 font-bold text-[#94a1a9]'>الاستشاريين</p>
            <div data-aos="zoom-in" className='grid grid-cols-1 px-20  md:grid-cols-3  p-5 gap-10 md:gap-40 xl:gap-0 justify-items-center'>
                {
                    data.map(doc => {
                        return <CardPerson doc={doc} />

                    })
                }


            </div>
        </>
    )
}
