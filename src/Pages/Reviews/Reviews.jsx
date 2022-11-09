import React, { useContext, useEffect, useState } from 'react';
import ReviewGrid from '../../component/ReviewGrid/ReviewGrid';
import { AuthContext } from '../../context/AuthProvider';
import DocumentTItle from '../../utilities/DocumentTitle';

const Reviews = () => {
    DocumentTItle('Reviews');
    const {user} = useContext(AuthContext);
    const [userReviews , setUserReviews] = useState([]);

    useEffect(() => {
        const url = `http://localhost:4000/reviews?userEmail=${user?.email}`
        fetch(url)
        .then((res) => res.json())
			.then((data) => {
			
				setUserReviews(data);
			});
    }, []);

    const handleEdits = () => {

    }
    const handleDelete = (_id) => {
        const confirm = window.confirm("are you sure to Delete this Review")

        if(confirm){
            console.log(_id);
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
                    handleDelete={handleDelete} ></ReviewGrid>
                ):
                `No reviews were added`
            }
        </div>
    </div>
    </section>
    );
};

export default Reviews;