import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useNavigate } from "react-router-dom";
import 'react-photo-view/dist/react-photo-view.css';

const ServiceLayout = ({ item }) => {
	const { description, img, name, price, ratting, _id ,thumbImg } = item;
	const navigate = useNavigate();
const handleNavigate = (_id) =>{
    navigate(`/services/${_id}`)
}
	return (
		<div className="card w-96 xl:w-full xl:card-side bg-base-100 shadow-xl mx-auto hover:bg-gradient-to-tl from-secondary via-white to-transparent bg-gradient-to-br">
			<figure className="xl:w-5/12">
			<PhotoProvider>
      <PhotoView src={img}>
        <img src={img} alt={name} className="cursor-pointer"/>
      </PhotoView>
    </PhotoProvider>
			</figure>
			<div className="card-body xl:w-7/12">
				<h2 className="card-title">{name}</h2>
				<div className="description">
				<p>{description?.slice(0, 100)}....</p>
				</div>
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
