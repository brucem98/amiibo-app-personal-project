import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleNavLinks } from './navLinks/navLinksSlice';
import marioerror from '../resources/images/nes-mario-dying.png';

export const Error404 = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleNavLinks())
    return () => {
      dispatch(toggleNavLinks())
    }
  }, [dispatch])


  return (
    <section className='error-page-container'>
      <h1>ERROR 404</h1>
      <p>This page does not exist</p>
      <img src={marioerror} alt='another castle' />
    </section>
  )
}

