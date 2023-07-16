import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { Root } from './components/Root';
import { AmiibosList } from './features/amiibos/AmiibosList';
import { SingleAmiiboPage } from './features/amiibos/SingleAmiiboPage';
import { FavoriteAmiibosPage } from './features/favorites/FavoriteAmiibosPage';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Root/> }>
    <Route index element={ <AmiibosList/>}/>
    <Route path='amiibos/:name/:id' element={ <SingleAmiiboPage/> }/>
    <Route path='amiibos/favorites' element={ <FavoriteAmiibosPage/> } />
  </Route>
))

function App() {
  return (
    <RouterProvider router={ router } />
  )
}

export default App;
