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
    // console.log(service._id , user);

     /*
"userName": "Bridges",
"userEmail": "claricerodriquez@rubadub.com",
"userImg": "https://randomuser.me/api/portraits/women/47.jpg",
"description": "Incididunt aute Lorem aliquip dolore aliqua tempor consequat consectetur. In quis non tempor consectetur amet tempor ullamco eu. Laboris ut laboris incididunt voluptate voluptate exercitation. Deserunt et in et ex. Commodo sit laborum ut quis tempor aliqua in reprehenderit sunt officia sit est fugiat.\r\nAnim culpa ut exercitation elit amet adipisicing eiusmod ipsum ut ea veniam. Dolore ipsum ex officia mollit cupidatat nostrud ea deserunt. Pariatur aliqua enim sunt sint.\r\n",
"postTime": "2022-11-07 06:00",
"ratting": 4.88,
"service_id": "636a95f6074300328cd09110"
}

     */

    const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
    const onSubmit =(data) =>{

        const userName = user?.displayName;
        const userEmail =user?.email
        const userImg = user?.photoURL;
        const service_id = service._id;
        const newData = { ...data , 
        "userName":userName,
        "userEmail":userEmail,
        "userImg":userImg,
        "service_id":service_id}

        fetch(`http://localhost:4000/reviews/` , {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(newData)
        })
        .then(res => res.json())
        .then(data => {
            setSuccess(true);
            console.log(success);
            console.log('success', data);
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
    { success === true && <div className="alert alert-success shadow-lg p-20">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {/* <span> {title} is Updated </span> */}
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