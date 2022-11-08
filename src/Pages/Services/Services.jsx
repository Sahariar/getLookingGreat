import React, { useEffect, useState } from "react";
import ServiceLayout from "../../component/ServiceLayout/ServiceLayout";

const Services = () => {
	const [allServices, setAllServices] = useState([]);

	useEffect(() => {
		const url = `http://localhost:4000/services`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				// console.log(data);
				setAllServices(data);
			});
	}, []);

    console.log('service' , allServices)

	return (
		<section className="service-page">
			<div className=" bg-gradient-to-tl  from-green-200 via-green-50 to-transparent shadow-xl rounded-lg xl:mx-12 mx-4">
				<div className="container mx-auto">
					<div className="text-center py-20 my-10">
						<h2 className="mb-05 text-5xl font-extrabold mb-5">Service</h2>
						<h4 className="subtitle text-xl">Home - Service</h4>
					</div>
				</div>
			</div>
            <div className="xl:w-10/12 mx-auto my-48">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                
                {allServices.map((item) => (
                    <ServiceLayout key={item._id} item={item}></ServiceLayout>
                ))}
            </div>
        </div>
		</section>
	);
};

export default Services;
