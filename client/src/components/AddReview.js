import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import StoresContext from '../context/StoresContext';

function AddReview() {
  const {user} = useContext(StoresContext);
  const [rating, setRating] = useState("");
  const [reviewText, setReviewText] = useState("");
  const { id } = useParams();
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/stores/${id}/addReview`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: user.username,
          review: reviewText,
          rating
        })
      });
      if (!response.ok) {
        throw new Error(`Bad server response, ${response.status}`)
      }
      await response.json();
      history(0);
    } catch(error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="write-review-container d-flex justify-content-center">
        <h2 className="text-center bg-secondary text-warning d-inline-block review-text">Write A Review</h2>
      </div>
      <div className="mb-2">
        <form action="">
          <div className="row g-3">
            <div className="form-group col">
              <label htmlFor="rating" className="mb-2 fw-bolder bg-warning label-container">Rating</label>
              <div>
                <select onChange={(e) => setRating(e.target.value)} value={rating} id="rating" className="form-select">
                  <option disabled value="">Rating</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="Review" className="mb-2 mt-2 fw-bolder bg-warning label-container">Review</label>
            <textarea onChange={(e) => setReviewText(e.target.value)} value={reviewText} id="Review" className="form-control"></textarea>
          </div>
          <button type="submit" onClick={handleSubmit} className="mt-3 btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  )
}

export default AddReview
