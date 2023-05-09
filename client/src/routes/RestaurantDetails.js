import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import RestaurantsContext from '../context/RestaurantsContext';
import Reviews from '../components/Reviews';
import AddReview from '../components/AddReview';


function RestaurantDetails () {
  const {selectedRestaurant, setSelectedRestaurant} = useContext(RestaurantsContext);
  const { id } = useParams();
  useEffect(() => {
    async function getData () {
      try {
        const response = await fetch (`/api/restaurants/${id}`)
        if (!response.ok) {
          throw new Error (`Bad server response, ${response.status}`)
        }
        const jsonData = await response.json();
        setSelectedRestaurant(jsonData.data);
      } catch(err) {
        console.error(err);
      }
    }
    getData();
  }, []);

  if (selectedRestaurant === undefined) {
    return (
      <>
        <div className="loading-container d-flex justify-content-center align-items-center">
            <div className="text-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
        </div>
      </>
    )
  }

  return (
    <div>{selectedRestaurant.restaurant.name && (
      <>
        <h1 className="text-center display-1">{selectedRestaurant.restaurant.name}</h1>
        <div className="d-flex align-items-center justify-content-center container">
          <Reviews reviews={selectedRestaurant.reviews}/>
        </div>
        <div className="container">
          <AddReview />
        </div>
      </>
    )}</div>
  )
}
export default RestaurantDetails;
