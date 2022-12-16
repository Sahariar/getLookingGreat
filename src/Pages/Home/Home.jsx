import React from 'react';
import Hero from '../../component/HomeComponents/Hero';
import HomeServices from '../../component/HomeComponents/HomeServices'
import HomeShowcase from '../../component/HomeComponents/HomeShowcase'
import HireMe from '../../component/HomeComponents/HireMe'
import Testimonials from '../../component/HomeComponents/Testimonials'
import DocumentTItle from '../../utilities/DocumentTitle';
import Blog from '../../component/HomeComponents/Blog';

const Home = () => {
    DocumentTItle('Home');
    return (
    <>
        <Hero></Hero>
        <HomeServices></HomeServices>
        <HomeShowcase></HomeShowcase>
        <HireMe></HireMe>
        <Blog></Blog>
        <Testimonials></Testimonials>
    </>
    );
};

export default Home;