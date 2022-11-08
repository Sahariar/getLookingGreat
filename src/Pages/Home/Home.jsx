import React from 'react';
import Hero from '../../component/HomeComponents/Hero';
import HomeServices from '../../component/HomeComponents/HomeServices'
import HomeShowcase from '../../component/HomeComponents/HomeShowcase'
import Testimonials from '../../component/HomeComponents/Testimonials'

const Home = () => {
    return (
    <>
        <Hero></Hero>
        <HomeServices></HomeServices>
        <HomeShowcase></HomeShowcase>
        <Testimonials></Testimonials>
    </>
    );
};

export default Home;