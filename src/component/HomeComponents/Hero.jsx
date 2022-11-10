import React from 'react';
import { Link } from 'react-router-dom';
import "./HomeComponents.css";

const Hero = () => {
    return (
        <section className='hero-section -mt-20'>
        <div className="hero hero-img " >
        <div className="hero-overlay  lg:bg-gradient-to-r lg:from-white lg:via-white lg:to-transparent lg:bg-opacity-5 
        bg-gradient-to-br from-white via-white to-transparent
        "></div>
<div className="hero-content text-neutral-content">
<div className="container mx-auto">
    <div className="lg:w-7/12 text-black">
    <h1 className="mb-2 text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">
        Hi I am Barbara Valentin.
        </h1>
    <h2 className="mb-5 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-secondary to-slate-700">
    A Skilled Makeup Artist.
    </h2>
  <p className="mb-5">
  Barbara Valentin is an internationally accredited and highly skilled makeup artist,
 working with high quality vegan products for all skin types and tones.</p>
 <Link to={'/services'}>
    <span className="btn btn-primary btn-outline btn-block  sm:btn-wide">
    Get Started
    </span>
 </Link>
    </div>

</div>


</div>
</div>
    </section>
    );
};

export default Hero;