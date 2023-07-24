import React from 'react'

import { Header } from './Header.js'
import { Outlet } from 'react-router-dom'

export const Root = () => {
  return (
    <>
      <Header/>
      <main className='main-section'>
        <Outlet/>
      </main>
    </>
  )
}
