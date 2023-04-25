import React, {useState, createContext} from "react";

const RestaurantsContext = createContext();
export default RestaurantsContext;

export const RestaurantsContextProvider = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState([]);

  const addRestaurants = (restaurant) => {
    setRestaurants([...restaurants, restaurant])
  }


  return (
    <RestaurantsContext.Provider value={{restaurants, setRestaurants, addRestaurants, selectedRestaurant, setSelectedRestaurant}}>
      {props.children}
    </RestaurantsContext.Provider>
  )
}
