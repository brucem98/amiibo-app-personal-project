import React from 'react';
import logo from '../resources/images/Amiibo_logo.png';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleNavLinks } from './navLinks/navLinksSlice';


export const Header = () => {
  const navigate = useNavigate();
  const showNavLinks = useSelector(state => state.navLinks.showNavLinks);
  const dispatch = useDispatch();

  const handleToggleNavLinks = () => {
    dispatch(toggleNavLinks())
  };

  return (
    <header className='header-container header-background'>
      <Link to= {'/'}>
        <img src={logo} alt='Amiibo Logo' className='inactiveNavLink'/>
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

