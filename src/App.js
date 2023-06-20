import React from 'react';
import {  
  RouterProvider, 
  createBrowserRouter,
  createRoutesFromElements,
  Route 
} from 'react-router-dom';

import { Root } from './app/components/Root';
import { AmiibosList } from './features/amiibos/AmiibosList';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={ <Root/> }>
       <Route path="/" element={<AmiibosList/>}/>
  </Route>
)) 

function App() {
  return (
    <RouterProvider router={ router } />
  )
}

export default App;
