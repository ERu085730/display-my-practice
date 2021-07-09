import React from "react";
import ReactDOM from "react-dom";
import "./sass/main.scss";
import { Header } from "./js/header.js";
import { Footer } from "./js/footer.js";
import { Slider } from "./js/slider.js";
import { Operations } from "./js/operations.js";
import { Filter } from "./js/filter.js";

function Container() {
  return (
    <div className="container">
      <Header />
      <Slider />
      <Operations />
      <Filter />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Container />, document.getElementById("root"));
