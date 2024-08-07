import React from "react";
import "./HomeSection.css";
import ResumePdf from "../assets/Resume/TannuResume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
export default function AboutSection() {
  return (
    <div id="AboutSection">
      <section className="aboutSection">
        <div className="aboutText mt-4">
          About
          <span
            style={{
              color: "#05B4FF",
            }}
          >
            {" "}
            Me
          </span>
        </div>
        <div className="rowAbout">
          <div className="aboutPhoto">
            <img
              src={require("../assets/profile_img.jpeg")}
              alt="Paris"
              className="aboutPhotoStyle"
            ></img>
          </div>
          <div className="aboutInfo mt-4">
            <p className="mt-4 aboutDesc">
              My name is Tannu Saxena, I'm a Mobile/Frontend Developer. Learning
              stuffs from internet to add magic to my projects. Completed my
              B.Tech in Computer Science and polishing my Software Development and
              Problem Solving skills.
            </p>
            <div className="row my-3">
              <div className="columns contact-details">
                <h3
                  className="my-3 contactDetailsText"
                  style={{
                    color: "#FFFFFF",
                  }}
                >
                  Contact{" "}
                  <span
                    style={{
                      color: "#05B4FF",
                    }}
                  >
                    {" "}
                    Details
                  </span>
                </h3>
                <p
                  className="address"
                  style={{
                    color: "#C7C4C7",
                  }}
                >
                  <span>Tannu Saxena</span>
                  <br />
                  <span>Brij Vihar Colony, muradnagar, GZB</span>
                  <br />
                  <span>+917668508432</span>
                  <br />
                  <span>tannusaxena02@gmail.com</span>
                </p>
              </div>
              <div className="columns download my-4">
                <a
                  href={ResumePdf}
                  download="Resume-PDF-document"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="btn btn-primary btn-lg downloadButton"
                  >
                    <AiOutlineDownload className="downloadIcon" />
                    Download Resume
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
