import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReviewGrid from '../../component/ReviewGrid/ReviewGrid';
import { AuthContext } from '../../context/AuthProvider';
import DocumentTItle from '../../utilities/DocumentTitle';

const Reviews = () => {
    DocumentTItle('Reviews');
    const {user , logOut} = useContext(AuthContext);
    const [userReviews , setUserReviews] = useState([]);
    const [dataLoading, setDataLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://b6a11-service-review-server-side-sahariar.vercel.app/reviews/user?userEmail=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('GLG-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => {
                setDataLoading(false)
				setUserReviews(data);
            })
    }, [user?.email, logOut ,userReviews])


    
    const handleEdits = (_id) => {

    navigate(`/reviews/edit/${_id}`)
    }
    const handleDelete = (_id) => {
        const confirm = window.confirm("are you sure to Delete this Review")
        console.log(_id);
        if(confirm){
                fetch(`https://b6a11-service-review-server-side-sahariar.vercel.app/reviews?id=${_id}`, {
                 method: "DELETE",
                 headers: {
                    "authorization": `Bearer ${localStorage.getItem('GLG-token')}`
                }
                })
                .then(res=> res.json())
                .then(data => {
                 console.log(data);
                 if(data.deletedCount > 0 ){
                     const remainingReviews = userReviews.filter( item => item._id !== _id);
                     setUserReviews(remainingReviews);
                     alert('Review Deleted Successfully.')
                 }
                })
        }
       
        
    }


    return (
        <section className="reviews-page">
        <div className=" bg-gradient-to-tl  from-secondary/20 via-white to-secondary/20 shadow-xl rounded-lg xl:mx-12 mx-4">
            <div className="container mx-auto">
                <div className="text-center py-20 my-10">
                    <h2 className="mb-05 text-5xl font-extrabold mb-5">Reviews</h2>
                    <h4 className="subtitle text-xl">Home - Reviews</h4>
                </div>
            </div>
        </div>
        <div className="xl:w-10/12 mx-auto my-24">

        {
					dataLoading ? <div className="flex items-center justify-center space-x-2">
					<div className="w-8 h-8 rounded-full animate-pulse bg-primary"></div>
					<div className="w-8 h-8 rounded-full animate-pulse bg-primary"></div>
					<div className="w-8 h-8 rounded-full animate-pulse bg-primary"></div>
				</div> :
					    <div className="grid grid-cols-1 gap-8">
                        {
                            userReviews.length > 0 ? userReviews.map(
                                item => <ReviewGrid
                                key={item._id}
                                item={item}
                                handleDelete={handleDelete} 
                                handleEdits={handleEdits} ></ReviewGrid>
                            ):
                            `No reviews were added`
                        }
                    </div>
				
				}

    </div>
    </section>
    );
};

export default Reviews;