import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useNavigate } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import ReviewStar from '../../Star/ReviewStar';
const ServiceGrid = ({item}) => {
 const {
    description,
    img,
    thumbImg,
    name,
    price,
    ratting,
    _id
} = item
const navigate = useNavigate();
const handleNavigate = (_id) =>{
    navigate(`/services/${_id}`)
}
    return (
        <div className=" text-primary image-full card w-10/12 md:w-10/12 lg:w-full xl:w-full rounded-2xl shadow-xl hover:shadow-2xl mx-auto ">
  <figure>
        <img src={thumbImg} alt={name} className=""/>
  </figure>
  <div className="card-body text-primary items-center justify-center rounded-2xl bg-white/80 shadow-xl hover:shadow-2xl">
    <h2 className="card-title">{name}</h2>

    <div className="info-area">
    <p className="text-xl my-4">
     {description?.slice(0,50)}...
      </p>
      <p className="text-xl">
        Price:
     <span className="font-bold text-primary mx-4">${price}</span> 
      </p>
      <div className="text-xl flex items-center">
        Ratting:
      <span className="font-bold text-primary mx-2"><ReviewStar reviewScore={ratting}></ReviewStar></span> 
      </div>
  
    </div>
    <div className="card-actions justify-center my-4">
      <button className="btn btn-primary btn-wide text-white"
      onClick={() => handleNavigate(_id)}
      >More Details</button>
    </div>
  </div>
</div>
        

    );
};

export default ServiceGrid;