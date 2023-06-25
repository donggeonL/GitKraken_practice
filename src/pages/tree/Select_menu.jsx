import React from "react";
import "./Select_menu.css";

const Select_menu = () => {
  return (
    <div className="flex-wrapper">
      {/* 포트폴리오 사이트 라우팅 */}
      <a href="https://donggeonl.github.io/portfolio/" className="one">
        <div className="overlay">
          <div className="overlay-inner">
            <h2> section 1 </h2>
            <p>
              My Portfolio site
            </p>
          </div>
        </div>
      </a>
      {/* ? */}
      <a href="#" className="two">
        <div className="overlay">
          <div className="overlay-inner">
            <h2 asd="adad"> section 2 </h2>
            <p>
              뭐하지
            </p>
          </div>
        </div>
      </a>
      {/* ? */}
      {/* <a href="#" className="three">
        <div className="overlay">

          <div className="overlay-inner">
            <h2> section 3 </h2>
            <p>
              뭐하지
            </p>
          </div>
        </div>
      </a> */}

    </div>
  );
};

export default Select_menu;
