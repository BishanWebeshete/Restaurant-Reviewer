import UpdateStore from '../components/UpdateStore';
import Navbar from '../components/Navbar';
import React, {useEffect, useContext} from 'react';
import StoresContext from '../context/StoresContext';
import {useNavigate} from 'react-router-dom';

function UpdatePage () {
  const {user} = useContext(StoresContext);
  const history = useNavigate();

  useEffect(()=> {
    if (!user) history('/sign-in');
  })

  return (
    <>
      <Navbar />
      <div>
        <div className="d-flex justify-content-center">
          <h1 className="update-text mt-3 display-1 bg-secondary d-inline-block text-warning">Update Store</h1>
        </div>
        <UpdateStore />
      </div>
    </>
  )
}
export default UpdatePage;
