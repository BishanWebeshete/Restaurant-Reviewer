import React, { useState, useContext } from 'react';
import RestaurantsContext from '../context/RestaurantsContext'

function AddRestaurant () {
  const { addRestaurants } = useContext(RestaurantsContext)
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/restaurants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          location: location,
          priceRange: priceRange
        })
      });
      if (!response.ok) {
        throw new Error('Network response not OK', response.status)
      }
      const jsonData = await response.json();
      addRestaurants(jsonData);
    } catch(error) {
      console.error(error);
    }
  }

  return (
      <div className="mb-4 d-flex justify-content-center form-container">
        <form className="row row-col-4 g-4 form-inline">
          <div className="col-3">
            <input
            value={name}
            onChange={(e)=>setName(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Name" />
          </div>
          <div className="col-3">
            <input
            value={location}
            onChange={(e)=>setLocation(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Location" />
          </div>
          <div className="col-3 add-restaurant-select-container">
            <select value={priceRange} onChange={(e)=>setPriceRange(e.target.value)} className="custom-select my-1 mr-sm-2 add-restaurant-select">
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <div className="col-3 add-restaurant-button">
            <button onClick={handleSubmit} type="submit" className="btn btn-primary mb-3">Submit</button>
          </div>
        </form>
      </div>
  )
}
export default AddRestaurant;
