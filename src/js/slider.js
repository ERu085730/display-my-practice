import { slider_1, slider_2, slider_3 } from "./image.js";
import React, { useEffect, useState } from "react";

export function Slider() {
  const [cur, setCur] = useState(0);
  useEffect(() => {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dots__dot");
    const dotActive = document.querySelector(`.dots__dot[data-slide="${cur}"]`);
    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${(index - cur) * 100}%)`;
    });
    dots.forEach((dot) => dot.classList.remove("dots__dot--active"));
    dotActive.classList.add("dots__dot--active");
  });
  return (
    <div className="slider" id="slider">
      <h2>Slider</h2>
      <div className="slide slide--1">
        <div className="slide__img">
          <img src={slider_1} alt="slider--1" />
        </div>
      </div>
      <div className="slide slide--2">
        <div className="slide__img">
          <img src={slider_2} alt="slider--2" />
        </div>
      </div>
      <div className="slide slide--3">
        <div className="slide__img">
          <img src={slider_3} alt="slider--3" />
        </div>
      </div>

      <button
        className="slider__btn slider__btn--left"
        onClick={() => {
          if (cur > 0) setCur(cur - 1);
          else setCur(2);
        }}
      >
        &larr;
      </button>
      <button
        className="slider__btn slider__btn--right"
        onClick={() => {
          if (cur < 2) setCur(cur + 1);
          else setCur(0);
        }}
      >
        &rarr;
      </button>
      <div className="dots">
        <button
          className="dots__dot  dots__dot--active"
          data-slide="0"
          onClick={() => {
            setCur(0);
          }}
        ></button>
        <button
          className="dots__dot"
          data-slide="1"
          onClick={() => {
            setCur(1);
          }}
        ></button>
        <button
          className="dots__dot"
          data-slide="2"
          onClick={() => {
            setCur(2);
          }}
        ></button>
      </div>
    </div>
  );
}
