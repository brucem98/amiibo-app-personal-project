import React from 'react'
import logo from '../resources/images/Amiibo_logo.png'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className='header-container header-background'>
      <Link to= {'/'}>
        <img src={logo} alt='Amiibo Logo' className='inactiveNavLink'/>
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink 
              to='/amiibos/favorites'
              className={({ isActive }) => isActive ? 'activeNavLink' : 'inactiveNavLink'}
            >
              Favorites
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => navigate(-1)} className='inactiveNavLink'>Go Back</NavLink>
          </li>
        </ul>
      </nav>
    </header> 
  )
}

