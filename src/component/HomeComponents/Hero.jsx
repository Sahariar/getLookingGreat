import React from "react";
import { Link } from "react-router-dom";
import "./HomeComponents.css";

const Hero = () => {
	return (
		<section className="hero-section -mt-28  bg-accent/20">
			<div className=" flex items-center justify-start min-h-screen">
				
				<div className="container mx-auto text-neutral-content">
					<div className="">
                    <div className="flex flex-col-reverse lg:flex-row items-center justify-start">
						<div className="pl-4 pt-10 pb-10 pr-10 lg:w-6/12">
							<h1 className="py-10 text-3xl md:text-6xl font-extrabold">
								Hi I am Barbara Valentin
							</h1>
							<h2 className="pb-4 text-3xl font-bold">
								A Skilled Makeup Artist.
							</h2>
							<p className="mb-5">
								Barbara Valentin is an internationally accredited and highly
								skilled makeup artist, working with high quality vegan products
								for all skin types and tones.
							</p>
							<Link to={"/services"} className="btn btn-primary btn-block text-white sm:btn-wide">
									Get Started
							</Link>
						</div>
                        <div className="lg:w-6/12">
                            <img src="https://i.ibb.co/pjL99cg/My-project-3.png" alt="img" />
                        </div>
					</div>
                    </div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
