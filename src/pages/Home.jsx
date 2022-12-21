import React from 'react'
import NavigatoinBar from '../components/NavigatoinBar'
import Articles from '../sections/Articles'
import BookSec from '../sections/BookSec'
import FooterNav from '../sections/FooterNav'
import HeaderSection from '../sections/HeaderSection'
import HeroSec from '../sections/HeroSec'
import HomeCareSec from '../sections/HomeCareSec'
import KaderSec from '../sections/KaderSec'
import Location from '../sections/Location'
import Numbers from '../sections/Numbers'
import OffersSection from '../sections/OffersSection'

export default function Home() {
    return (
        <>
            <NavigatoinBar />
            <HeroSec />
            <BookSec />
            <OffersSection />
            <Location />
            <Articles />
            <HomeCareSec />
            <HeaderSection />
            <Numbers />
            <KaderSec />
            <FooterNav />
        </>
    )
}
