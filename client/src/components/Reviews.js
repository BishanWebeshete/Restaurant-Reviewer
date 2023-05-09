import React from 'react';
import StarRating from './StarRating';

export default function Reviews ({reviews}) {
  if(reviews.length === 0) {
    return (
      <div className="error-container bg-danger">
        <h3 className="error text-white">There are no reviews at the moment... please check back soon!</h3>
      </div>
    );
  }

  return (
    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 mb-2 w-100">
      {reviews?.map(({id, name, rating, review}) => {
        return (
          <div key={id} className="card text-white mb-3 mx-auto p-2 border-0">
            <div className=" card-header d-flex justify-content-between bg-primary">
              <span>{name}</span>
              <span className="d-flex flex-nowrap"><StarRating rating={rating} /></span>
            </div>
            <div className="card-body bg-primary rounded-bottom">
              <p className="card-text">{review}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
