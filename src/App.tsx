import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Guide} from './pages/guide/Guide';
import s from "./index.module.css";

export const App: React.FC = () => {
  return (
    <div className={s.wrapper}>
    <BrowserRouter>
    <Switch>
      <Route exact path="/" />
      <Route path="/guide" component={Guide}/>
      </Switch>
    </BrowserRouter>
    </div>
  )}

