import React, {useContext} from 'react';
import StoresContext from '../context/StoresContext';

function Navbar() {
  const {handleSignOut} = useContext(StoresContext);

  return (
    <nav className="navbar navbar-light bg-secondary d-flex justify-content-between display-5">
      <a className='text-black retail-rater-text' href="/">Retail-Rater</a>
      <button className="sign-out-button" onClick={handleSignOut}>Sign Out</button>
    </nav>
  )
}
export default Navbar;
