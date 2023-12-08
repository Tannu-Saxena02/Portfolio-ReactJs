import React from "react";
// import {
//   Link
// } from "react-router-dom";
// import { Link } from 'react-scroll';
export default function Navbar() {
  // "homepage": "https://tannu-saxena02.github.io/Portfolio-ReactJs/",
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/">Navbar</a> */}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* // style={{flexDirection:"row",display:"flex",justifyContent:"flex-end",alignSelf:"flex-end",alignContent:"flex-end"}}> */}
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/"
                  style={{ color: "white", marginInline: 40 }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#ExperienceSection"
                  style={{ color: "white", marginInline: 40 }}
                >
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#AboutSection"
                  style={{ color: "white", marginInline: 40 }}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#EducationAndSkillSection"
                  style={{ color: "white", marginInline: 40 }}
                >
                  Education & Skills
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#ContactUsSection"
                  style={{ color: "white", marginInline: 40 }}
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
