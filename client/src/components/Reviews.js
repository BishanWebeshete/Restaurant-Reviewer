import React from 'react';
import StarRating from './StarRating';

export default function Reviews ({reviews}) {
  return (
    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 mb-2 w-100">
      {reviews?.map((review) => {
        return (
          <div key={review.id} className="card text-white mb-3 mx-auto p-2 border-0">
            <div className=" card-header d-flex justify-content-between bg-primary">
              <span>{review.name}</span>
              <span className="d-flex flex-nowrap"><StarRating rating={review.rating} /></span>
            </div>
            <div className="card-body bg-primary rounded-bottom">
              <p className="card-text">{review.review}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
