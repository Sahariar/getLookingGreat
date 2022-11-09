import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReviewGrid from '../../component/ReviewGrid/ReviewGrid';
import { AuthContext } from '../../context/AuthProvider';
import DocumentTItle from '../../utilities/DocumentTitle';

const Reviews = () => {
    DocumentTItle('Reviews');
    const {user} = useContext(AuthContext);
    const [userReviews , setUserReviews] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const url = `http://localhost:4000/reviews?userEmail=${user?.email}`
        fetch(url)
        .then((res) => res.json())
			.then((data) => {
			
				setUserReviews(data);
			});
    }, [userReviews]);

    const handleEdits = (_id) => {
{/* <Link to={`/reviews/add/${details._id}`}>Reviews</Link>   */}
    navigate(`/reviews/edit/${_id}`)
    }
    const handleDelete = (_id) => {
        const confirm = window.confirm("are you sure to Delete this Review")
        console.log(_id);
        if(confirm){
                fetch(`http://localhost:4000/reviews/${_id}`, {
                 method: "DELETE"
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
    </div>
    </section>
    );
};

export default Reviews;