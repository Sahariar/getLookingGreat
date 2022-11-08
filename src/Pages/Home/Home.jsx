import React from 'react';
import Hero from '../../component/HomeComponents/Hero';
import HomeServices from '../../component/HomeComponents/HomeServices'
import HomeShowcase from '../../component/HomeComponents/HomeShowcase'
import HireMe from '../../component/HomeComponents/HireMe'
import Testimonials from '../../component/HomeComponents/Testimonials'

const Home = () => {
    return (
    <>
        <Hero></Hero>
        <HomeServices></HomeServices>
        <HomeShowcase></HomeShowcase>
        <HireMe></HireMe>
        <Testimonials></Testimonials>
    </>
    );
};

export default Home;