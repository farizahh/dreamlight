import React from 'react'
import Footer from '../component/Footer'
import LpBanner from '../component/landing-page/LpBanner'
import LpTentang from '../component/landing-page/LpTentang'
import LpPortofolio from '../component/landing-page/LpPortofolio'
import LpService from '../component/landing-page/LpService'
import LpPremade from '../component/landing-page/LpPremade'
import LpContact from '../component/landing-page/LpContact'

const Home = () => {
    return (
        <>
            <LpBanner />
            <LpTentang />
            <LpPortofolio />
            <LpService />
            <LpPremade />
            <LpContact />
            <Footer />
        </>
    )
}

export default Home
