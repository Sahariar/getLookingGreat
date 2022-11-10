import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { BsCurrencyDollar,BsStarHalf ,BsStarFill } from "react-icons/bs";
import ReviewList from '../../component/ReviewList/ReviewList';
import { AuthContext } from '../../context/AuthProvider';

const DetailsService = () => {
    const {user} = useContext(AuthContext);
    const details = useLoaderData();
    const [allReviews , setAllReviews] = useState([]);
    const [dataLoading, setDataLoading] = useState(true);
    useEffect(() => {
        const url = `https://b6a11-service-review-server-side-sahariar.vercel.app/reviews?service_id=${details._id}`
        fetch(url)
        .then((res) => res.json())
			.then((data) => {
                setDataLoading(false)
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
            <div className="flex  flex-col lg:flex-row">
                <div className="lg:w-4/12 w-10/12 mx-auto lg:mx-4">
                    <figure >
                        <img src={details.thumbImg} alt={details.name} className='rounded-xl shadow-xl mx-auto' />
                    </figure>
                </div>
                <div className="lg:w-8/12 w-10/12 mx-auto lg:mx-4" >
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
                        <div className="flex justify-between flex-col lg:flex-row mx-2">
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
            {
					dataLoading ? <div className="flex items-center justify-center space-x-2">
					<div className="w-8 h-8 rounded-full animate-pulse bg-primary"></div>
					<div className="w-8 h-8 rounded-full animate-pulse bg-primary"></div>
					<div className="w-8 h-8 rounded-full animate-pulse bg-primary"></div>
				</div> :
					          <div className="">
                              <h2 className="text-3xl text-center text-primary p-10 capitalize">
                                  What other Clients says About this service ?
                              </h2>
                                  <h2 className="reviewItem text-center">
                                      {details.name} have {allReviews.length} Reviews
                                  </h2>
                  
                  {
                   user?.email ? <div className='w-8/12 mx-auto text-center my-10 p-12 rounded-xl shadow-xl from-secondary via-white to-transparent bg-gradient-to-br'>
                      Add <span className='mx-1'>
                      <Link to={`/reviews/add/${details._id}`}>Reviews</Link>  
                      </span>
                     Here</div> : <div className='w-8/12 mx-auto text-center my-10 p-12 rounded-xl shadow-xl from-secondary via-white to-transparent bg-gradient-to-br'>
                     Please  <span className='mx-1'>
                      <Link to={'/login'}>login</Link>  
                      </span>
                       to add a review  
                     </div>
                  }
                              
                              <div className="w-8/12 mx-auto">
                             {
                              allReviews.map(item => <ReviewList
                              key={item._id}
                              item={item}
                              ></ReviewList>)
                             }
                                 
                              </div>
                                  
                              </div>      
				
				}
   
            </div>
         
        </div>



    </section>
    );
};

export default DetailsService;