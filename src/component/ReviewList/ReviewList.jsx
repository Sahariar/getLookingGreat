import React from 'react';
import { BsCurrencyDollar,BsStarHalf ,BsStarFill } from "react-icons/bs";

const ReviewList = ({item}) => {

    const {
        userName,
      userEmail,
      userImg,
      description ,
      postTime,
      ratting,
      service_id
    } = item

    return (
        <div className="flex flex-col w-full  p-6 mx-auto divide-y divide-gray-700 card rounded-lg shadow-lg">
        <div className="flex justify-between p-4">
            <div className="flex space-x-4">
                <div>
                    <img src={userImg} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                </div>
                <div>
                    <h4 className="font-bold">{userName}</h4>
                    <span className="text-xs "> Posted On : {postTime}</span>
                </div>
               
            </div>
            <div className="flex items-center space-x-2 dark:text-yellow-500">
			 <div className="flex items-center space-x-2 dark:text-yellow-500">
             <BsStarFill  size={22}/> 
                            <BsStarFill  size={22}/> 
                            <BsStarFill  size={22}/> 
                            <BsStarFill  size={22}/> 
                            <BsStarHalf  size={22}/> 
			<span className="text-xl font-bold">{ratting}</span>
		</div>
			
		</div>
        </div>
        <div className="p-4 space-y-2 text-sm ">
            <p>
                {
                    description
                }
            </p>
        </div>
    </div>
    );
};

export default ReviewList;