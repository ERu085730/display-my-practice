import { Nav } from "./nav.js";
import { title__img, title__img__small } from "./image.js";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export function Header() {
  const { ref, inView, entry } = useInView();
  useEffect(() => {
    if (inView) {
      entry.target.src = entry.target.dataset.src;
      const timer = setTimeout(function () {
        entry.target.classList.remove("img--lazy");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [inView, entry]);
  return (
    <div className="header">
      <div className="header__nav">
        <div className="logo">Just Logo</div>
        <Nav />
      </div>
      <div className="header__title">
        <h1>
          Display My <span>Practice</span>
        </h1>
        <img
          className="img--lazy"
          ref={ref}
          src={title__img__small}
          data-src={title__img}
          alt="title"
        />
      </div>
    </div>
  );
}
