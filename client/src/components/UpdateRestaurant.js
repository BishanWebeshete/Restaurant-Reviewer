import React from 'react';
import { useParams } from 'react-router-dom'

function UpdateRestaurant (props) {
  const test = useParams()
  console.log(test)
  return (
    <form className="container" action="">
      <div className="form-group mt-3">
        <label for="name">Name</label>
        <input id="name" className="form-control"></input>
      </div>
      <div className="form-group mt-3">
        <label for="location">Location</label>
        <input id="location" className="form-control"></input>
      </div>
      <div className="form-group mt-4">
        <select>
          <option selected>Price Range</option>
          <option value="1">$</option>
          <option value="2">$$</option>
          <option value="3">$$$</option>
          <option value="4">$$$$</option>
          <option value="5">$$$$$</option>
        </select>
      </div>
    </form>
  )
}
export default UpdateRestaurant;
