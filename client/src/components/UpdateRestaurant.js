import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function UpdateRestaurant (props) {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range");
  let history = useNavigate();

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(`/api/restaurants/${id}`);
        if (!response.ok) {
          throw new Error(`Bad server response, ${response.status}`);
        }
        const jsonData = await response.json();
        setName(jsonData.name);
        setLocation(jsonData.location);
        setPriceRange(jsonData.priceRange);
      } catch(err) {
        console.error(err);
      }
    }
    getData();
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(`/api/restaurants/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          name: name,
          location: location,
          priceRange: priceRange
        })
      });
      if (!response.ok) {
        throw new Error(`Bad server response, ${response.status}`)
      }
      const jsonData = await response.json();
      console.log(jsonData);
      history('/');
    } catch(err) {
      console.error(err);
    }
  }

  return (
    <form className="container" action="">
      <div className="form-group mt-3">
        <label htmlFor="name">Name</label>
        <input value={name} onChange={(e)=> setName(e.target.value)} id="name" className="form-control"></input>
      </div>
      <div className="form-group mt-3">
        <label htmlFor="location">Location</label>
        <input value={location} onChange={(e)=> setLocation(e.target.value)} id="location" className="form-control"></input>
      </div>
      <div className="form-group mt-4">
        <select value={priceRange} onChange={(e)=> setPriceRange(e.target.value)} className="form-select">
          <option>Price Range</option>
          <option value="1">$</option>
          <option value="2">$$</option>
          <option value="3">$$$</option>
          <option value="4">$$$$</option>
          <option value="5">$$$$$</option>
        </select>
      </div>
      <button type="submit" onClick={handleSubmit} className="btn btn-primary mt-3">Save Changes</button>
    </form>
  )
}
export default UpdateRestaurant;
