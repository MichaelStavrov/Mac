import React from 'react';
import { Provider } from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom';
import { store } from './store'
import {Guide} from './pages/guide/Guide';
import s from "./index.module.css";
import { MacsByYear } from './pages/MacsByYear/MacsByYear';
import { Macs } from './pages/MacsByYear/Macs/Macs';
import { MainPage } from './pages/Main/MainPage';


export const App = () => {
  
  return (
    <Provider store={store}>
      <div className={s.wrapper}>
      <BrowserRouter>
        <Route path="/" exact component={MainPage}/>
        <Route path="/guide" component={Guide}/>
        <Route path="/byYear" exact component={MacsByYear}/>
        <Route path="/byYear/:id" component={Macs}/>
      </BrowserRouter>
      </div>
    </Provider>
  )}

