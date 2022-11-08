import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceGrid from "./ServiceGrid/ServiceGrid";

const HomeServices = () => {
	const [homeServices, setHomeServices] = useState([]);
	useEffect(() => {
		const limit = 3;
		const url = `http://localhost:4000/services?limit=${limit}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				// console.log(data);
				setHomeServices(data);
			});
	}, []);

	console.log("homeServices", homeServices);

	return (
		<section className="home-service my-10">
			<div className="container mx-auto">
				<div className="text-center my-10">
                <h2 className="mb-05 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">
                    Service
                </h2>
                <h4 className="subtitle text-xl">
                    Checkout Services
                </h4>
                </div>
                
        <div className="xl:w-10/12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                
                {homeServices.map((item) => (
                    <ServiceGrid key={item._id} item={item}></ServiceGrid>
                ))}
            </div>
        </div>
				
                        <div className="lg:w-2/12 w-4/12 mx-auto my-10">
                        <Link to={'/services'}>
                    <span className="btn btn-primary btn-outline btn-block">
                        See All
                    </span>
                </Link>
                        </div>
                
			</div>
		</section>
	);
};

export default HomeServices;
