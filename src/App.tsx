import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Guide} from './pages/guide/Guide';
import s from "./index.module.css";

export const App: React.FC = () => {
  return (
    <div className={s.wrapper}>
    <BrowserRouter>
      <Route path="/guide" component={Guide}/>
    </BrowserRouter>
    </div>
  )}

