import React from 'react';
import './css_pages/Header.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Header = () => {
  const navigate = useNavigate();
  const showNavLinks = useSelector(state => state.navLinks.showNavLinks);

  return (
    <header className='header-container header-background'>
      <Link to= {'/'}>
      <div className='header-img-container inactiveNavLink'>
      </div>
      </Link>
      {showNavLinks && (
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
      )}
    </header> 
  )
}

