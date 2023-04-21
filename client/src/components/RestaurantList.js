import React, {useEffect, useState, useContext} from 'react'
import RestaurantsContext from '../context/RestaurantsContext';

function RestaurantList(props) {
  const [error, setError]= useState();
  const { restaurants, setRestaurants } = useContext(RestaurantsContext)

  useEffect(() => {
    async function getRestaurants() {
      try {
        const response = await fetch('/api/restaurants');
        if(!response.ok) {
          throw new Error('Network response was not OK', response.status);
        }
        const jsonData = await response.json();
        setRestaurants(jsonData);
      } catch (error) {
        setError(error);
      }
    }
    getRestaurants();
  }, [])

  return(
    <div className="list-group container">
      <table className="table text-white">
        <thead className="bg-primary">
          <tr>
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Expense</th>
            <th scope="col">Satisfaction</th>
            <th scope="col">Update</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody className="bg-dark">
          {restaurants.map(restaurant => {
            return (
              <tr key={restaurant.restaurantId}>
                <td>{restaurant.name}</td>
                <td>{restaurant.location}</td>
                <td>{"$".repeat(restaurant.priceRange)}</td>
                <td>reviews</td>
                <td><button className="btn btn-warning">Edit</button></td>
                <td><button className="btn btn-danger">Remove</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
export default RestaurantList;
