import React from 'react'
import logo from '../resources/images/Amiibo_logo.png'

import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
      <header className='header-container'>
        <img src={logo} alt='Amiibo Logo'/>
        <nav>
          <NavLink to=''>Favorites</NavLink>
          <NavLink to=''>Go Back</NavLink>
        </nav>
      </header> 
   )
}

