import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { store } from "./store";
import { Guide } from "./pages/guide/Guide";
import s from "./index.module.css";
import { ByYear } from "./pages/ByYear/ByYear";
import { ListByYear } from "./pages/ByYear/ListByYear/ListByYear";
import { Header } from "./Header/Header";

export const App = () => {
  return (
    <Provider store={store}>
        <BrowserRouter>
          <Header/>
          <div className={s.wrapper}>
            <Route path="/" exact component={Guide} />
            <Route path="/guide" component={Guide} />
            <Route path="/byYear" exact  component={ByYear} />
            <Route path="/byYear/:id" component={ListByYear} />
          </div>

        </BrowserRouter>
    </Provider>
  );
};
