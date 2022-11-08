import React from 'react';
import "./HomeComponents.css";

const Hero = () => {
    return (
        <section className='hero-section -mt-20'>
        <div className="hero hero-img " >
        <div className="hero-overlay bg-gradient-to-r from-white via-white to-transparent bg-opacity-5"></div>
<div className="hero-content text-neutral-content">
<div className="container mx-auto">
    <div className="w-7/12 text-black">
    <h1 className="mb-2 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">
        Hi I am Barbara Valentin.
        </h1>
    <h2 className="mb-5 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-secondary to-slate-700">
    A Skilled Makeup Artist.
    </h2>
  <p className="mb-5">
  Barbara Valentin is an internationally accredited and highly skilled makeup artist,
 working with high quality vegan products for all skin types and tones.</p>
  <button className="btn btn-primary btn-outline">Get Started</button>
    </div>

</div>


</div>
</div>
    </section>
    );
};

export default Hero;