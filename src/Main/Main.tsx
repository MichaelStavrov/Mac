import React from "react";
import { Guide } from "./pages/guide/Guide";
import s from "./main.module.css";
import { ByYear } from "./pages/ByYear/ByYear";
import { ListByYear } from "./pages/ByYear/ListByYear/ListByYear";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import { Route } from "react-router-dom";
import { Favorites } from "./pages/Favorites/Favorites";

export function Main() {
  return (
    <main className={s.main}>
      <Route path="/" exact component={Guide} />
      <Route path="/favorites" component={Favorites}/>
      <Route path="/guide" component={Guide} />
      <Route path="/byYear" exact component={ByYear} />
      <Route path="/byYear/:year" component={ListByYear} />
      <Route path="/product/:id" component={ProductPage} />
    </main>
  );
}
