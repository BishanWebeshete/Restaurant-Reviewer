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
        setSelectedRestaurant(jsonData);
      } catch(err) {
        console.error(err);
      }
    }
    getData();
  }, []);

  return (
    <div>{selectedRestaurant.name && (
      <>
        <div className="mt-3 container">
          <Reviews/>
        </div>
        <div className="container">
          <AddReview />
        </div>
      </>
    )}</div>
  )
}
export default RestaurantDetails;
