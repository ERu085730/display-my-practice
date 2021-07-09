import { useEffect, useState } from "react";

export function Operations() {
  const [btn, setBtn] = useState("");
  useEffect(() => {
    if (btn === "") return;
    const operations__btn = document.querySelectorAll(".operations__btn");
    const operations__con = document.querySelectorAll(".operations__content");
    operations__btn.forEach((btn) => {
      btn.classList.remove("operations__btn--active");
    });
    operations__con.forEach((con) =>
      con.classList.remove("operations__content--active")
    );
    btn.classList.add("operations__btn--active");
    document
      .querySelector(`.operations__content--${btn.dataset.btn}`)
      .classList.add("operations__content--active");
  });
  return (
    <div className="operations" id="operations">
      <h2>Operations</h2>
      <div className="operations__btns">
        <button
          className="operations__btn operations__btn--1 operations__btn--active"
          data-btn="1"
          onClick={(e) => setBtn(e.target)}
        >
          01 Btn
        </button>
        <button
          className="operations__btn operations__btn--2"
          data-btn="2"
          onClick={(e) => setBtn(e.target)}
        >
          02 Btn
        </button>
        <button
          className="operations__btn operations__btn--3"
          data-btn="3"
          onClick={(e) => setBtn(e.target)}
        >
          03 Btn
        </button>
      </div>
      <div className="operations__content operations__content--1 operations__content--active">
        <div className="operations__img"></div>
        <h3>Header 1</h3>
        <p>
          adipisicing elit. QuoLorem ipsum dolor, sit amet consectetur
          adipisicing elit. Quo inventore obcaecati distinctio cum molestiae,
          doloribus vitae labore sapiente quia animi nisi quas iusto nulla unde
          ipsum, dicta, quibusdam vel minus!
        </p>
      </div>
      <div className="operations__content operations__content--2">
        <div className="operations__img"></div>
        <h3>Header 2</h3>
        <p>
          animi nisi quas iusto nLorem ipsum dolor, sit amet consectetur
          adipisicing elit. Quo inventore obcaecati distinctio cum molestiae,
          doloribus vitae labore sapiente quia animi nisi quas iusto nulla unde
          ipsum, dicta, quibusdam vel minus!cum molestiae, doloribus vitae
        </p>
      </div>
      <div className="operations__content operations__content--3">
        <div className="operations__img"></div>
        <h3>Header 3</h3>
        <p>
          sapiente quia animiLorem ipsum dolor, sit amet consectetur adipisicing
          elit. Quo inventore obcaecati distinctio cum molestiae, doloribus
          vitae labore sapiente quia animi nisi quas iusto nulla unde ipsum,
          dicta, quibusdam vel minus!iusto nulla unde ipsum
        </p>
      </div>
    </div>
  );
}
