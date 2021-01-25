import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

export function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Route path="/guide" component={() => <h1>Byeyer's Guide</h1>}/>
    </BrowserRouter>
    </div>
  );
}
