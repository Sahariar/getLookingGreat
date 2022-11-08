import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BsCurrencyDollar,BsStarHalf ,BsStarFill } from "react-icons/bs";
import ReviewList from '../../component/ReviewList/ReviewList';

const DetailsService = () => {
    const details = useLoaderData();
    console.log(details);
    
    const [allReviews , setAllReviews] = useState([]);

    useEffect(() => {
        const url = `http://localhost:4000/reviews?service_id=${details._id}`
        fetch(url)
        .then((res) => res.json())
			.then((data) => {
			
				setAllReviews(data);
			});
    }, [])
    

    return (
        <section className="service-page" >
        
            <div className='rounded-xl  shadow-xl mx-4 xl:mx-12' style={{backgroundImage:`url(${details.img})`,
        backgroundRepeat:`no-repeat`,
        backgroundSize:"auto",
        backgroundPosition:"top"}}>
            <div className=" bg-gradient-to-b from-white/70 via-white/60  to-white/80  ">
            <div className="container mx-auto text-center">
                <div className="py-32 my-10">
                    <h2 className="mb-05 text-5xl font-extrabold mb-5">{details.name}</h2>
                    <h4 className="subtitle text-xl">Home - Service</h4>
                </div>
            </div>
            </div>
        </div>

        <div className="service-info-area my-10">
            <div className="container mx-auto">
            <div className="flex">
                <div className="w-4/12">
                    <figure >
                        <img src={details.thumbImg} alt={details.name} className='rounded-xl shadow-xl' />
                    </figure>
                </div>
                <div className="w-8/12">
                    <div className="title-area">
                        <h2 className="text-4xl py-5">
                            {details.name}
                        </h2>
                    </div>
                    <p className='text-lg'>
                        <span className="font-bold mr-4">
                        Description:     
                        </span>
                        {details.description}
                    </p>
                    <div className="meta-info my-10">
                        <div className="flex justify-between">
                        <div className="flex gap-2">

                            <BsCurrencyDollar  size={22}/> 
                            <p className="text-xl ">
                         Price:   ${details.price}
                        </p>
                            </div>
                            <div className="flex gap-3">
                            <p className="text-xl ">
                         Ratting:   
                        </p>
                            <BsStarFill  size={22}/> 
                            <BsStarFill  size={22}/> 
                            <BsStarFill  size={22}/> 
                            <BsStarFill  size={22}/> 
                            <BsStarHalf  size={22}/> 
                            {details.ratting}
                            </div>
                            

                        </div>
                     
                    </div>
    
                </div>
            </div>
            <div className="">
            <h2 className="text-3xl text-center text-primary p-10 capitalize">
                What other Clients says About this service ?
            </h2>
                <h2 className="reviewItem text-center">
                    {details.name} have {allReviews.length} Reviews
                </h2>
            <div className="w-8/12 mx-auto">
           {
            allReviews.map(item => <ReviewList
            key={item._id}
            item={item}
            ></ReviewList>)
           }
               
            </div>
                
            </div>
            </div>
         
        </div>



    </section>
    );
};

export default DetailsService;