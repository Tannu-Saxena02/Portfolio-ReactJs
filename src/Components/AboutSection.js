import React from 'react'
import "./HomeSection.css";
import ResumePdf from '../assets/Resume/Resume.pdf';
import {
    AiOutlineDownload,
  } from "react-icons/ai";
export default function AboutSection() {
  return (
    <div id="AboutSection">
       <section className="aboutSection">
          <div className="rowAbout">
            <div className="aboutPhoto">
              <img
                src={require("../assets/developer.jpg")}
                alt="Paris"
                className="aboutPhotoStyle"
              ></img>
            </div>
            <div className="aboutInfo my-4" style={{ width: "50%" }}>
              <div className="aboutText">
                About
                <span className="meText"> Me</span>
              </div>
              <p className="my-4 aboutDesc">
                My name is Shubham, I'm a MERN Stack Developer. Learning stuffs
                from internet to add magic to my projects. Completed my BE in
                Computer Science and polishing my Leadership and Management
                skills.
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
                    <span>+91 70093-77116</span>
                    <br />
                    <span>tannusaxena023@gmail.com</span>
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
  )
}
