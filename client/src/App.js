// import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import RestaurantDetails from './routes/RestaurantDetails';
import UpdateRestaurant from './routes/UpdateRestaurant';
import { RestaurantsContextProvider } from './context/RestaurantsContext';

function App() {
  return (
    <RestaurantsContextProvider>
      {/* <div className="container"> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/restaurants/:id' element={<RestaurantDetails />} />
          <Route path='/restaurants/:id/update' element={<UpdateRestaurant />} />
        </Routes>
      {/* </div> */}
    </RestaurantsContextProvider>
  )
}

export default App;
