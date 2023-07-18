import React from 'react';
import marioerror from '../resources/images/nes-mario-dying.png';

export const Error404 = () => {
  return (
    <section className='error-page-container'>
      <h1>ERROR 404</h1>
      <p>This page does not exist</p>
      <img src={marioerror} alt='another castle' />
    </section>
  )
}

