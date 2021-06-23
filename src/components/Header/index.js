import React from "react";
import "./style.css";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="row pt-5">
          <div className="col-3 d-flex justify-content-center">
            <img
              src="assets/images/logo.png"
              alt=""
              className="img-fluid pt-5"
              width="150px"
            />
          </div>
          <div className="col-3  d-flex justify-content-center">
            <a href="/">Home</a>
          </div>
          <div className="col-3  d-flex justify-content-center">
            <a href="/">Vision Labs</a>
          </div>
          <div className="col-3  d-flex justify-content-center align-items-start pt-4">
            <input type="text" placeholder="输入关键字搜索" className="px-2" />
            <button className="deadStyleBtn">
              <img
                src="assets/images/search.svg"
                alt=""
                width="20px"
                className="header__searchIcon"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
