import React, { useContext, useState } from 'react';
import DocumentTItle from '../../utilities/DocumentTitle';
import { useForm } from "react-hook-form";
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
const AddReviews = () => {
    DocumentTItle('Add Reviews');
    const service = useLoaderData();
    const {user} = useContext(AuthContext);
    const [success , setSuccess] = useState(false);
    const [submitting , setSubmitting] = useState(false);
    console.log(service._id);

    const {
		register,
		handleSubmit,
		formState: { errors },
        reset,
	} = useForm();
    const onSubmit =(data) =>{
        setSubmitting(true)
        const userName = user?.displayName;
        const userEmail =user?.email
        const userImg = user?.photoURL;
        const service_id = service._id;
        const newData = { ...data , 
        "userName":userName,
        "userEmail":userEmail,
        "userImg":userImg,
        "service_id":service_id}

        fetch(`https://b6a11-service-review-server-side-sahariar.vercel.app/reviews/single` , {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${localStorage.getItem('GLG-token')}`
            },
            body:JSON.stringify(newData)
        }).then(res => res.json()).then(data => {
            console.log(data)
            if(data.acknowledged){
               reset()
               setSuccess(true);
               setSubmitting(false)
            }
        }).catch(errors => {
            console.log(errors);
        })
        
    }

    return (
        <section className="reviews-page">
        <div className=" bg-gradient-to-tl  from-secondary/20 via-white to-secondary/20 shadow-xl rounded-lg xl:mx-12 mx-4">
            <div className="container mx-auto">
                <div className="text-center py-20 my-10">
                    <h2 className="mb-05 text-5xl font-extrabold mb-5">Add Reviews</h2>
                    <h4 className="subtitle text-xl">Home - Add Reviews</h4>
                </div>
            </div>
        </div>
    <div className="xl:w-6/12 mx-auto my-24 card  bg-gradient-to-tl from-secondary/20 via-white to-secondary/20 shadow-xl rounded-lg">
    { submitting === true && <div className="alert alert-info shadow-lg p-20">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span> Review is Submitting </span>
                    <div className="flex items-center justify-center space-x-2">
					<div className="w-8 h-8 rounded-full animate-pulse bg-secondary"></div>
					<div className="w-8 h-8 rounded-full animate-pulse bg-secondary"></div>
					<div className="w-8 h-8 rounded-full animate-pulse bg-secondary"></div>
				</div>
                </div>
            </div>}
    { success === true && <div className="alert bg-success shadow-lg p-10 w-8/12 mx-auto">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                   <h3 className='text-2xl text-center'>Review is Submitted Successfully</h3> 
                </div>
            </div>}
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-12 p-20">
            <div className="grid grid-cols-6 gap-4 col-span-full">
				<div className="col-span-full flex flex-col">
                <label htmlFor="ratting" className="text-xl p-2">Ratting :</label>
                    <input
					type="text"
                    className="input input-bordered input-primary w-full mx-2"
					placeholder="Ratting"
					{...register("ratting" , { required: "Your Ratting for the Service" })}
                    defaultValue={"4.59"}
				/>				
                </div>
                <div className="col-span-full flex flex-col">
                <label htmlFor="description" className="text-xl p-2">Review :</label>
   	
                <textarea {...register("description")} placeholder="Review" className="textarea textarea-primary w-full"  
                defaultValue={ "Review"}
                />			
                </div>
				
			</div>
                <div className="space-y-2">
			        <div className="w-4/12 mx-auto">
            <input type="submit" className="w-full px-8 py-3 font-semibold rounded-md btn btn-primary" />
			        </div>

		</div>
				
			</form>

            
            {errors.title && <div className="bg-error p-10"><p className="text-white">{errors.title.message}</p> </div>}
            
    </div>
    </section>
    );
};

export default AddReviews;