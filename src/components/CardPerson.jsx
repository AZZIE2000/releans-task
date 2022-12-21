import React from 'react'

export default function CardPerson({ doc }) {
    return (
        <>
            <a class="group w-72 relative block bg-black overflow-hidden rounded-3xl">
                <img
                    alt="Doctor"
                    src={doc.img}
                    class="absolute inset-0 h-full object-cover group-hover:scale-110 duration-700 transition-all opacity-75 transform  group-hover:opacity-50"
                />

                <div className='absolute bottom-0 bg-gradient-to-t opacity-0 group-hover:opacity-100 transition-all translate-y-52 group-hover:translate-y-0 duration-700 from-red-600/75 h-2/5 right-0 left-0 '>
                </div>
                <div class="relative p-8 ">

                    <p class="text-lg  text-end font-medium uppercase tracking-widest text-red-500">
                        الدكتور
                    </p>

                    <p class="text-2xl text-end font-bold text-white">{doc.name}</p>

                    <div class="mt-64 ">
                        <div
                            class="translate-y-8 transform opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100"
                        >
                            <p class="text-md font-bold text-end pb-5 text-white">
                                {doc.title}
                            </p>
                            <p class="text-lg text-end text-white ">
                                {doc.info}
                            </p>
                        </div>
                    </div>
                </div>
            </a>
        </>
    )
}
