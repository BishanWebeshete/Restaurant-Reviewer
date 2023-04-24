import React, {useEffect, useState, useContext} from 'react'
import RestaurantsContext from '../context/RestaurantsContext';
import { AiFillEdit } from 'react-icons/ai';
import { AiOutlineDelete } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';


function RestaurantList(props) {
  const [error, setError]= useState();
  const { restaurants, setRestaurants } = useContext(RestaurantsContext)
  let history = useNavigate();

  useEffect(() => {
    async function getRestaurants() {
      try {
        const response = await fetch('/api/restaurants');
        if(!response.ok) {
          throw new Error(`Bad server response, ${response.status}`);
        }
        const jsonData = await response.json();
        setRestaurants(jsonData);
      } catch (error) {
        setError(error);
      }
    }
    getRestaurants();
  }, []);

  const handleDelete = async (restaurantId) => {
    try {
      const response = await fetch (`/api/restaurants/${restaurantId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type':'application/json'
        }
      });
      if(!response.ok) {
        throw new Error(`Bad server response, ${response.status}`);
      }
      const jsonData = await response.json();
      setRestaurants(restaurants.filter((restaurant) => {
        return (restaurant.restaurantId !== jsonData.restaurantId)
      }))
    } catch (error) {
      console.error(error);
    }
  }

  const handleUpdate = (restaurantId) => {
    history(`/restaurants/${restaurantId}/update`);
  }

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
                <td className="td">{restaurant.name}</td>
                <td>{restaurant.location}</td>
                <td>{"$".repeat(restaurant.priceRange)}</td>
                <td>reviews</td>
                <td><button onClick={() => handleUpdate(restaurant.restaurantId)} className="btn btn-warning"><AiFillEdit/></button></td>
                <td><button onClick={() => handleDelete(restaurant.restaurantId)} className="btn btn-danger"><AiOutlineDelete/></button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
export default RestaurantList;
