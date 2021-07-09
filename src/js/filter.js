import { useState, useEffect } from "react";
import {
  sea_1,
  sea_2,
  sea_3,
  mountain_1,
  mountain_2,
  mountain_3,
} from "./image.js";

export function Filter() {
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    const items = document.querySelectorAll(".filter__item");
    items.forEach((item) => {
      if (filter === "all") item.style.display = "block";
      else {
        if (item.classList.contains(filter)) item.style.display = "block";
        else item.style.display = "none";
      }
    });
  });
  return (
    <div className="filter" id="filter">
      <h2>Filter</h2>
      <div className="filter__btns">
        <button
          className="filter__btn filter__btn--1"
          data-filter="all"
          onClick={(e) => setFilter(e.target.dataset.filter)}
        >
          All
        </button>
        <button
          className="filter__btn filter__btn--2"
          data-filter="mountain"
          onClick={(e) => setFilter(e.target.dataset.filter)}
        >
          Mountain
        </button>
        <button
          className="filter__btn filter__btn--3"
          data-filter="sea"
          onClick={(e) => setFilter(e.target.dataset.filter)}
        >
          Sea
        </button>
      </div>
      <div className="filter__items">
        <div className="filter__item sea">
          <img src={sea_1} alt="sea-1" />
        </div>
        <div className="filter__item sea">
          <img src={sea_2} alt="sea-2" />
        </div>
        <div className="filter__item sea">
          <img src={sea_3} alt="sea-3" />
        </div>
        <div className="filter__item mountain">
          <img src={mountain_1} alt="mountain-1" />
        </div>
        <div className="filter__item mountain">
          <img src={mountain_2} alt="mountain-2" />
        </div>
        <div className="filter__item mountain">
          <img src={mountain_3} alt="mountain-3" />
        </div>
      </div>
    </div>
  );
}
