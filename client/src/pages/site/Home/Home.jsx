import React from 'react'
import Hero from '../../../components/Hero/Hero'
import FeaturedCategories from '../../../components/FeaturedCategories/FeaturedCategories'
import Banner from '../../../components/Banner/Banner'
import PopularProducts from '../../../components/PopularProducts/PopularProducts'
import BestSeller from '../../../components/BestSeller/BestSeller'
import DealsOfTheDay from '../../../components/DealsOfTheDay/DealsOfTheDay'
import TopSelling from '../../../components/TopSelling/TopSelling'

const Home = () => {
    return (
        <>
            <Hero />
            <FeaturedCategories />
            <Banner />
            <PopularProducts />
            <BestSeller />
            <DealsOfTheDay />
            <TopSelling />
        </>
    )
}

export default Home