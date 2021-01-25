import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Guide} from './pages/guide/Guide';

export function App() {
  return (
    <div className="wrapper">
    <BrowserRouter>
      <Route path="/guide" component={Guide}/>
    </BrowserRouter>
    </div>
  );
}
