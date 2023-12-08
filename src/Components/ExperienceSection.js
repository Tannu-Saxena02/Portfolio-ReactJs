import React from "react";
import "./HomeSection.css";
import {
  AiOutlineMobile,
  AiOutlineLaptop,
  AiOutlineCode,
} from "react-icons/ai";
export default function ExperienceSection() {
  return (
    <div>
      <div className="experienceSection" id="ExperienceSection">
        <div className="experienceTitle mt-4">
          My
          <span
            style={{
              color: "#05B4FF",
            }}
          >
            {" "}
            Experience
          </span>
        </div>
        <div className="boxContainer">
          <div className="box">
            <AiOutlineLaptop className="iconStyle" />
            <h3 className="expText">Web Developer</h3>
            <p className="expDesc">
              Explore my portfolio to witness my fusion of design and
              development, where every pixel serves a purpose. With HTML &amp;
              CSS.
            </p>
            <button type="button" className="btn btn-primary btn-lg readBtn">
              {" "}
              Read More
            </button>
          </div>
          <div className="box">
            <AiOutlineCode className="iconStyle" />
            <h3 className="expText">Software Developer</h3>
            <p className="expDesc">
              Translating ideas into robust applications. With a keen eye for
              detail, I engineer solutions that merge innovation with
              functionality.
            </p>
            <button type="button" className="btn btn-primary btn-lg readBtn">
              {" "}
              Read More
            </button>
          </div>
          <div className="box">
            <AiOutlineMobile className="iconStyle" />
            <h3 className="expText">Mobile Developer</h3>
            <p className="expDesc">
              Turning imagination into visually stunning realities. I craft
              aesthetics that communicate, resonate, and leave a lasting
              impression
            </p>
            <button type="button" className="btn btn-primary btn-lg readBtn">
              {" "}
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
