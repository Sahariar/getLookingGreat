import React from 'react';
import {BsStarHalf ,BsStarFill,BsStar } from "react-icons/bs";
const ReviewStar = ({reviewScore}) => {

    if(reviewScore > 3.00 &&  4.00 > reviewScore ){
        return (
            <>
            <div className="flex gap-2">
           
                            <BsStarFill size={22}/> 
                            <BsStarFill size={22}/> 
                            <BsStarFill size={22}/> 
                            <BsStar size={22}/> 
                            <BsStar size={22}/> 
                            
                            </div>
            </>
        );
    }else if(reviewScore > 4.00 && 4.50 > reviewScore ){
        return (
            <>
            <div className="flex gap-2">
      
                            <BsStarFill size={22}/> 
                            <BsStarFill size={22}/> 
                            <BsStarFill size={22}/> 
                            <BsStarFill size={22}/> 
                            <BsStar  size={22}/> 
                     
                            </div>
            </>
        );
    }else if(reviewScore > 4.50 ) {
        return (
            <>
            <div className="flex gap-2">
                            <BsStarFill  size={22}/> 
                            <BsStarFill  size={22}/> 
                            <BsStarFill  size={22}/> 
                            <BsStarFill  size={22}/> 
                            <BsStarHalf  size={22}/> 
                        
                            </div>
            </>
        );
    }else{
        <>
            <div className="flex gap-2">
                            <BsStar size={22}/> 
                            <BsStar size={22}/> 
                            <BsStar size={22}/> 
                            <BsStar size={22}/> 
                            <BsStar size={22}/> 
                           
                            </div>
            </>
    }
  
};

export default ReviewStar;