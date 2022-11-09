import React from 'react';

const ReviewGrid = ({item}) => {

    const { description, ratting, _id ,postTime ,service_id } = item;

    return (
        <div className="card bg-primary text-primary-content">
  <div className="flex p-12">
    <h2 className="card-title"></h2>
    <div className="info-area space-y-4">
    <p>Review : {description}</p>
    <p>Ratting : {ratting}</p>
    <p>Time of post  {postTime}</p>
    </div>
    <div className="time w-4/12">
      
    </div>
    <div className="card-actions">
      <button className="btn">Edit</button>
      <button className="btn">Delete</button>
    </div>
  </div>
</div>
    );
};

export default ReviewGrid;