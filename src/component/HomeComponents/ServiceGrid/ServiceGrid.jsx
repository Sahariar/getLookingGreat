import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceGrid = ({item}) => {
 const {
    description,
    img,
    name,
    price,
    ratting,
    _id
} = item
const navigate = useNavigate();
const handleNavigate = (_id) =>{
    navigate(`/${_id}`)
}
    return (
        <div className="card w-96 lg:w-full xl:w-96 bg-base-100 shadow-xl hover:shadow-2xl mx-auto">
  <figure className="px-10 pt-10 bg-gradient-to-br lg:bg-gradient-to-b from-secondary to-transparent bg-opacity-9 ">
    <img src={img} alt={name} className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{description?.slice(0,100)}...</p>
    <div className="info-area">
      <p className="text-xl text-primary ">
      Price:  <span className="font-bold">${price}</span> 
      </p>
      <p className="text-xl text-warning ">
      Ratting:  <span className="font-bold">{ratting}</span> 
      </p>
    </div>
    <div className="card-actions">
      <button className="btn btn-primary"
      onClick={() => handleNavigate(_id)}
      >More Details</button>
    </div>
  </div>
</div>
        

    );
};

export default ServiceGrid;