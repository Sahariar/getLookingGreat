import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceLayout = ({ item }) => {
	const { description, img, name, price, ratting, _id } = item;
	const navigate = useNavigate();
const handleNavigate = (_id) =>{
    navigate(`/services/${_id}`)
}
	return (
		<div className="card w-96 xl:w-full xl:card-side bg-base-100 shadow-xl mx-auto hover:bg-gradient-to-tl from-secondary via-white to-transparent bg-gradient-to-br">
			<figure className="xl:w-5/12">
				<img src={img} alt={name} />
			</figure>
			<div className="card-body xl:w-7/12">
				<h2 className="card-title">{name}</h2>
				<p>{description?.slice(0, 100)}....</p>
				<div className="info-area">
					<p className="text-xl text-primary ">
						Price: <span className="font-bold">${price}</span>
					</p>
					<p className="text-xl text-warning ">
						Ratting: <span className="font-bold">{ratting}</span>
					</p>
				</div>
				<div className="card-actions justify-end">
					<button className="btn btn-primary btn-block"
					onClick={() => handleNavigate(_id)}
					>Details</button>
				</div>
			</div>
		</div>
	);
};

export default ServiceLayout;
