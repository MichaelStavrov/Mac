import React from 'react';
import { Provider } from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom';
import { store } from './store'
import {Guide} from './pages/guide/Guide';
import s from "./index.module.css";


export const App: React.FC = () => {
  
  return (
    <Provider store={store}>
      <div className={s.wrapper}>
      <BrowserRouter>
        <Route path="/guide" component={Guide}/>
      </BrowserRouter>
      </div>
    </Provider>
  )}

