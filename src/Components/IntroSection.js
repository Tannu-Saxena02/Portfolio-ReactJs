import React from 'react'
import ReactTyped from "react-typed";
import "./HomeSection.css";
export default function IntroSection() {
  return (
    <div>
       <div id="IntroSection" className="headingContainer">
          <div className="homeHalf">
            <div className="headingTitle">
              <button
                type="button"
                className="btn btn-primary btn-lg helloButton"
              >
                Hello
              </button>         
              <div className="waveContainer">
                <span className="wave">👋</span>
              </div>
              <div className="iamtext">I 'm</div>
            </div>
            <div className="nameHeading">Tannu Saxena</div>
            {/* <h1>Inline hands <span className="wave">👋🏾</span> work also!</h1> */}
            <div className="roleTitle">
              <ReactTyped
                strings={[
                  "Software Developer",
                  "Mobile Developer",
                  "Frontened Developer",
                ]}
                typeSpeed={200}
                loop
              />
            </div>
            <p className="aboutTxt">
              Software Engineer at Novoinvent Software PVT LTD. and Graduated
              from R.D. Engineering College Affilated to AKTU (B.Tech CSE '23).
            </p>
          <a  className="nav-link"  href="#AboutSection">
            <button
              type="button"
              className="btn btn-primary btn-lg mt-3 aboutBtn"
            >
              About Me
            </button>
            </a>
          </div>
          <div className="imgContainer">
            <img
              src={require("../assets/developer.jpg")}
              alt="Paris"
              className="myImageStyle"
            ></img>
          </div>
        </div>
    </div>
  )
}
