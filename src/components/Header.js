import React from 'react'
import logo from '../resources/images/Amiibo_logo.png'
export const Header = () => {
    return (
      <header className='header-container'>
        <img src={logo} alt='Amiibo Logo'/>
        <nav>
          <a href=''>Favorites</a>
          <a href=''>Go Back</a>
        </nav>
      </header> 
   )
}

