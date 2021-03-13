import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import s from "./index.module.css";
import { store } from "./store";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Main } from "./Main/Main";

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <div className={s.wrapper}>
          <Main />
        </div>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};
