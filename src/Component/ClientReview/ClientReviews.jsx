import { useEffect, useState } from "react";
import ClientReview from "./ClientReview";


const ClientReviews = () => {
    const [reviews , SetReviews] = useState([])
    useEffect(()=>{
        fetch('ClientReview.json')
        .then(res => res.json())
        .then(data => SetReviews(data))
    },[])
    return (
        <div className='mt-7 font-Bebas'>
            <div className="w-full text-center">
            <h1 className="text-3xl md:text-5xl mb-4">Client <span className="text-[#DA0037]">Reviews</span></h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-7xl mx-auto px-5 mb-4">
                {
                    reviews.map(review => <ClientReview key={review.id} review={review}></ClientReview>)
                }
            </div>
        </div>
    );
};

export default ClientReviews;