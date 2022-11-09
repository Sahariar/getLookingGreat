import React, { useEffect, useState } from "react";
import {BsStarHalf ,BsStarFill } from "react-icons/bs";
import { MdEdit, MdDeleteForever } from "react-icons/md";
const ReviewGrid = ({ item }) => {
	const { description, ratting, _id, postTime, service_id } = item;
	const [serviceName, setServiceName] = useState([]);

	useEffect(() => {
		const url = `http://localhost:4000/services/${service_id}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setServiceName(data);
			});
	}, []);
	console.log(serviceName);
	return (
		<div className="card rounded-lg shadow-xl from-secondary via-white to-transparent bg-gradient-to-br my-5 w-10/12 mx-auto">
			<div className="flex p-12">
				<div className="info-area space-y-4">
					<h2 className="card-title">Review On : {serviceName.name}</h2>
					<p className="mr-12"> <span className="text-xl font-bold">Review</span> : {description}</p>
					<p className="flex gap-4"> 
                    Ratting :
                    <span className="flex text-red-600">
                    
                    <BsStarFill  size={22}/> 
                            <BsStarFill  size={22}/> 
                            <BsStarFill  size={22}/> 
                            <BsStarFill  size={22}/> 
                            <BsStarHalf  size={22}/> 
                   
                    {ratting} 
                    </span>
                     </p>
					<p>Time: {postTime}</p>
				</div>
				<div className="flex flex-col justify-around w-2/12">
					<button className="btn btn-circle btn-outline btn-primary">
						<MdEdit size={24} />
					</button>
					<button className="btn btn-circle btn-outline btn-primary">
						<MdDeleteForever size={24} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default ReviewGrid;
