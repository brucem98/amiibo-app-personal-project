import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

import { AmiibosList } from './features/amiibos/AmiibosList';

function App() {


  return (
    <div className="App">
      <AmiibosList />
    </div>
  );
}

export default App;
