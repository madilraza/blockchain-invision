import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(true);

  return (
    <div className="header">
      <div className="container">
        <div className="row pt-md-5">
          <div className="col-9 col-md-3 d-flex justify-content-start justify-content-md-center align-items-start align-items-md-center">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/logo.png"}
              alt=""
              className="img-fluid pt-md-5"
              width="150px"
            />
          </div>
          <div className="col-3 d-flex d-md-none justify-content-end align-items-start">
            <button
              className="deadStyleBtn"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <img
                src={process.env.PUBLIC_URL + "/assets/images/list.svg"}
                alt=""
                className="img-fluid pt-md-5"
                width="45px"
                style={{ filter: "invert()" }}
              />
            </button>
          </div>
          <div
            className={`row ${
              mobileNavOpen ? "d-flex" : "d-none"
            } d-md-none position-absolute justify-content-start align-items-start top-0 left-0 mobileNav bg-dark`}
            style={{ zIndex: 15 }}
          >
            <div className="row justify-content-end">
              <button
                className="deadStyleBtn d-flex justify-content-end pe-0 me-0"
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
              >
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/list.svg"}
                  alt=""
                  className="img-fluid pt-md-5"
                  width="45px"
                  style={{ filter: "invert()" }}
                />
              </button>
              <div className="col-12 border-bottom pb-2">
                <Link to="/">Home</Link>
              </div>
              <div className="col-12 pt-2">
                <Link to="/about">Vision Labs</Link>
              </div>
            </div>
          </div>
          <div className="col-3 d-none d-md-flex justify-content-center">
            <Link to="/">Home</Link>
          </div>
          <div className="col-3  d-none d-md-flex justify-content-center">
            <Link to="/about">Vision Labs</Link>
          </div>
          <div className="col-3  d-none d-md-flex justify-content-center align-items-start pt-4">
            <input type="text" placeholder="输入关键字搜索" className="px-2" />
            <button className="deadStyleBtn">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/search.svg"}
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
