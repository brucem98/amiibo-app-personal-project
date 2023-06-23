import React from 'react'

import { Header } from './Header.js'
import { AmiibosList } from '../features/amiibos/AmiibosList.js'

export const Root = () => {
  return (
    <>
        <Header/>
        <main className='main-section'>
          <AmiibosList/>
        </main>
    </>
  )
}
