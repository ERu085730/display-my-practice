import { useState, useEffect } from "react";

export function Nav() {
  const [id, setId] = useState("");
  useEffect(() => {
    if (id !== "")
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setId("");
  }, [id]);
  return (
    <div className="nav">
      <ul className="nav__lists">
        <li className="nav__list">
          <a
            href="#slider"
            className="nav__link"
            onClick={(e) => {
              setId("slider");
              e.preventDefault();
              // document
              //   .getElementById("slider")
              //   .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Slider
          </a>
        </li>
        <li className="nav__list">
          <a
            href="#operations"
            className="nav__link"
            onClick={(e) => {
              setId("operations");
              e.preventDefault();
            }}
          >
            Operations
          </a>
        </li>
        <li className="nav__list">
          <a
            href="#filter"
            className="nav__link"
            onClick={(e) => {
              setId("filter");
              e.preventDefault();
            }}
          >
            Filter
          </a>
        </li>
      </ul>
    </div>
  );

  // function scroll(id) {
  //   document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  // }
}
