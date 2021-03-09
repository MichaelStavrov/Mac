import React from "react";
import { Link } from "react-router-dom";
import s from "./mainPage.module.css";

export function MainPage() {
  return (
    <React.Fragment>
      <div className={s.title}>
        <h1>Macs</h1>
      </div>
      <p>This page provides a product summary for each Apple model. The intent is to provide our best recommendations regarding current product cycles, and to provide a summary of currently available rumors for each model.</p>
      <p>This page is based on rumors and speculation and we provide no guarantee to its accuracy.</p>
      <nav className={s.nav}>
        <Link to="/guide">
          <h2>Mac Releases</h2>
        </Link>
        <Link to="/byYear">
          <h2>Macs by year</h2>
        </Link>
      </nav>
    </React.Fragment>
  );
}
