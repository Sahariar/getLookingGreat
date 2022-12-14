import React, { useEffect, useState } from "react";
import ServiceLayout from "../../component/ServiceLayout/ServiceLayout";
import DocumentTItle from "../../utilities/DocumentTitle";

const Services = () => {
	DocumentTItle('Services');
	
	const [allServices, setAllServices] = useState([]);
	const [dataLoading, setDataLoading] = useState(true);
	useEffect(() => {
		const url = `https://b6a11-service-review-server-side-sahariar.vercel.app/services`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setDataLoading(false);
				setAllServices(data);
			});
	}, []);

	return (
		<section className="service-page">
			<div className="container mx-auto bg-gradient-to-tl  from-secondary/20 via-white to-secondary/20 shadow-xl rounded-lg">
				<div className="">
					<div className="text-center py-20 my-10">
						<h2 className="mb-05 text-5xl font-extrabold mb-5">Service</h2>
						<h4 className="subtitle text-xl">Home - Service</h4>
					</div>
				</div>
			</div>
			<div className="container mx-auto">
			<div className="mx-auto my-48">
                {
					dataLoading ? <div className="flex items-center justify-center space-x-2">
					<div className="w-8 h-8 rounded-full animate-pulse bg-primary"></div>
					<div className="w-8 h-8 rounded-full animate-pulse bg-primary"></div>
					<div className="w-8 h-8 rounded-full animate-pulse bg-primary"></div>
				</div> :
					<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
					{allServices.map((item) => (
						<ServiceLayout key={item._id} item={item}></ServiceLayout>
					))}
					</div>
				
				}
           
            
        </div>
			</div>
       
		</section>
	);
};

export default Services;
