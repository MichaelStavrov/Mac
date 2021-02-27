import React from 'react';
import { Provider } from 'react-redux'
import {BrowserRouter, Link, Route} from 'react-router-dom';
import { store } from './store'
import {Guide} from './pages/guide/Guide';
import s from "./index.module.css";


export const App: React.FC = () => {
  
  return (
    <Provider store={store}>
      <div className={s.wrapper}>
      <BrowserRouter>
        <Route path="/" exact component={() => <Link to="/guide"><h1>Guide</h1></Link>} />
        <Route path="/guide" component={Guide}/>
      </BrowserRouter>
      </div>
    </Provider>
  )}

