import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useNavigate } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
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
        <div className="card w-10/12 md:w-96 lg:w-full xl:w-96 bg-base-100 shadow-xl hover:shadow-2xl mx-auto bg-gradient-to-br lg:bg-gradient-to-b from-secondary to-transparent">
  <figure className="px-10 pt-10  bg-opacity-9 ">

  <PhotoProvider>
      <PhotoView src={img}>
        <img src={thumbImg} alt={name} className="rounded-xl"/>
      </PhotoView>
    </PhotoProvider>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{description?.slice(0,100)}...</p>
    <div className="info-area">
      <p className="text-xl  ">
      Price:  <span className="font-bold text-red-600">${price}</span> 
      </p>
  
    </div>
    <div className="card-actions">
      <button className="btn btn-primary text-white"
      onClick={() => handleNavigate(_id)}
      >More Details</button>
    </div>
  </div>
</div>
        

    );
};

export default ServiceGrid;