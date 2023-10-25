import React from 'react'
import "./HomeSection.css";

export default function EducationAndSkillSection() {
  return (
    <div id="EducationAndSkillSection">
       <section className="resume">
          <div className="educationContainer">
            <div className="colEducation">
              <h1>
                <span className="educationText">Education</span>
              </h1>
            </div>
            <div className="eduDesc">
              <h3 className="clgDesc">
                R.D Engineering College affilated to A.K.T.U University
              </h3>
              <p className="info">
                Bachelor Of Technology (B.Tech) in Computer Science{" "}
                <span>•</span>
                <em className="date">July 2023</em>
              </p>
              <p>CGPA : 9.16</p>
            </div>
          </div>
          <div className="skill">
            <div className="colSkill">
              <h1>
                <span className="skillText">Skills</span>
              </h1>
            </div>
            <div className="skillDesc">
              <div className="bars">
                <div className="skills">
                  <div className="meterContainer">Java</div>
                  <p style={{}}>
                    <span
                      className="bar-expand java"
                      style={{ width: "80%" }}
                    ></span>
                  </p>
                  <div className="meterContainer">C</div>
                  <p>
                    <span
                      className="bar-expand java"
                      style={{ width: "90%" }}
                    ></span>
                  </p>
                  <div className="meterContainer">C++</div>
                  <p>
                    <span
                      className="bar-expand java"
                      style={{ width: "90%" }}
                    ></span>
                  </p>
                  <div className="meterContainer">HTML</div>
                  <p>
                    <span
                      className="bar-expand java"
                      style={{ width: "90%" }}
                    ></span>
                  </p>
                  <div className="meterContainer">CSS</div>
                  <p>
                    <span
                      className="bar-expand java"
                      style={{ width: "85%" }}
                    ></span>
                  </p>
                  <div className="meterContainer">BootStrap</div>
                  <p>
                    <span
                      className="bar-expand java"
                      style={{ width: "80%" }}
                    ></span>
                  </p>
                  <div className="meterContainer">React Js</div>
                  <p>
                    <span
                      className="bar-expand java"
                      style={{ width: "80%" }}
                    ></span>
                  </p>
                  <div className="meterContainer">Android Development</div>
                  <p>
                    <span
                      className="bar-expand java"
                      style={{ width: "70%" }}
                    ></span>
                  </p>
                  <div className="meterContainer">React-native</div>
                  <p>
                    <span
                      className="bar-expand java"
                      style={{ width: "80%" }}
                    ></span>
                  </p>
                  <div className="meterContainer">Git</div>
                  <p>
                    <span
                      className="bar-expand java"
                      style={{ width: "70%" }}
                    ></span>
                  </p>
                  <div className="meterContainer">Github</div>
                  <p>
                    <span
                      className="bar-expand java"
                      style={{ width: "60%" }}
                    ></span>
                  </p>
                  {/* background: repeating-linear-gradient( -55deg, #00d4ff, #00d4ff 10px, #333 10px, #333 20px ); */}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Projects</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div>
                <h3>Fascinating Projects</h3>
                <p className="info">
                  Group-Chat App, Snake Game, Tic Tac Toe, Maze Game, Stopwatch,
                  Calculator, Travel-Management System and many more.
                  <span>
                    <br />•
                  </span>{" "}
                  <em className="date">August 2018 - Present</em>
                </p>
                <p>Woking on C, Java, MERN Stack and other web languages.</p>
              </div>
            </div>
          </div> */}
        </section>
    </div>
  )
}
