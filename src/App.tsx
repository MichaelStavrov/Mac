import React from 'react';
import { Provider } from 'react-redux'
import {BrowserRouter, Link, Route} from 'react-router-dom';
import { store } from './store'
import {Guide} from './pages/guide/Guide';
import s from "./index.module.css";
import { MacsByYear } from './pages/MacsByYear/MacsByYear';
import { Macs } from './pages/MacsByYear/Macs/Macs';


export const App: React.FC = () => {
  
  return (
    <Provider store={store}>
      <div className={s.wrapper}>
      <BrowserRouter>
        <Route path="/" exact component={
          () => 
            <>
            <Link to="/guide"><h1>Guide</h1></Link> 
            <Link to="/byYear"><h1>byYear</h1></Link> 
            </>
          }
        />
        <Route path="/guide" component={Guide}/>
        <Route path="/byYear" exact component={MacsByYear}/>
        <Route path="/byYear/:id" component={Macs}/>
      </BrowserRouter>
      </div>
    </Provider>
  )}

