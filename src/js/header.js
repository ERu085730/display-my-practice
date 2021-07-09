import { Nav } from "./nav.js";
// import title__img from "../img/title.jpg";
import { title__img } from "./image.js";

export function Header() {
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
        <img src={title__img} alt="title" />
      </div>
    </div>
  );
}
