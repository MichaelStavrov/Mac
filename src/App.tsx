import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./index.module.css";
import { store } from "./store";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { Main } from "./Components/Main/Main";

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
          <Main />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};
