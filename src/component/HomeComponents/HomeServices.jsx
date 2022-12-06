import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceGrid from "./ServiceGrid/ServiceGrid";

const HomeServices = () => {
	const [homeServices, setHomeServices] = useState([]);
    const [dataLoading, setDataLoading] = useState(true);
	useEffect(() => {
		const limit = 3;
		const url = `https://b6a11-service-review-server-side-sahariar.vercel.app/services?limit=${limit}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setDataLoading(false);
				setHomeServices(data);
			});
	}, []);

	return (
		<section className="home-service my-20">
			<div className="container mx-auto">
				<div className="text-center my-10">
                <h2 className="mb-05 text-5xl font-extrabold">
                    Service
                </h2>
                <h4 className="subtitle text-xl">
                    Checkout Services
                </h4>
                </div>
                
        <div className="xl:w-10/12 mx-auto">
        {
					dataLoading ? <div className="flex items-center justify-center space-x-2">
					<div className="w-8 h-8 rounded-full animate-pulse bg-primary"></div>
					<div className="w-8 h-8 rounded-full animate-pulse bg-primary"></div>
					<div className="w-8 h-8 rounded-full animate-pulse bg-primary"></div>
				</div> :
					       <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                
                           {homeServices.map((item) => (
                               <ServiceGrid key={item._id} item={item}></ServiceGrid>
                           ))}
                       </div>
				
				}
 
        </div>
				
                        <div className="lg:w-2/12 w-4/12 mx-auto my-10">
                        <Link to={'/services'}>
                    <span className="btn btn-primary text-white btn-block">
                        See All
                    </span>
                </Link>
                        </div>
                
			</div>
		</section>
	);
};

export default HomeServices;
