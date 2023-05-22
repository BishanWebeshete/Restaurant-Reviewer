import React, { useState, useContext } from 'react';
import StoresContext from '../context/StoresContext';

function AddStore () {
  const { addStores } = useContext(StoresContext)
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/stores', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          location,
          priceRange
        })
      });
      if (!response.ok) {
        throw new Error(`Bad server response, ${response.status}`)
      }
      const jsonData = await response.json();
      addStores(jsonData);
    } catch(error) {
      console.error(error);
    }
  }

  return (
      <form className="form store-form">
        <div className="form-group">
          <label htmlFor="input1">Name</label>
          <input
            value={name}
            onChange={(e)=>setName(e.target.value)}
            type="text"
            className="form-control"
            id="input1"
            placeholder="Store Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="input2">Location</label>
          <input
            value={location}
            onChange={(e)=>setLocation(e.target.value)}
            type="text"
            className="form-control"
            id="input2"
            placeholder="Store Location"
          />
        </div>
        <div className="form-group">
          <label htmlFor="input3">Price Range</label>
          <select value={priceRange} onChange={(e)=>setPriceRange(e.target.value)} className="form-control" id="input3">
            <option disabled value="">Price Range</option>
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
            <option value="5">$$$$$</option>
          </select>
        </div>
        <button onClick={handleSubmit} type="submit" className="btn btn-primary form-button">
          Submit
        </button>
      </form>
  )
}
export default AddStore;
