// import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import RestaurantDetails from './routes/RestaurantDetails';
import UpdatePage from './routes/UpdatePage';
import { RestaurantsContextProvider } from './context/RestaurantsContext';

function App() {
  return (
    <RestaurantsContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/restaurants/:id' element={<RestaurantDetails />} />
          <Route path='/restaurants/:id/update' element={<UpdatePage />} />
        </Routes>
    </RestaurantsContextProvider>
  )
}

export default App;
