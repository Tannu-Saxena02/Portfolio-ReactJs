import React from 'react'
import "./HomeSection.css";
import {
    AiOutlineArrowUp,
  } from "react-icons/ai";
export default function Footer() {
  return (
    <div>
     <div className="footer" id="footer">
          <div className="designedByText">made by Tannu.</div>
          <div className="upButton">
        <a className="nav-link" href="#HomeSection" style={{color:"white",marginInline:40}} >
            <button
              type="button"
              className="btn btn-primary btn-lg arrowBtn"
              // className="arrowBtn"
            >
              <AiOutlineArrowUp className="arrowBtnIcon" />
            </button>
            </a>
          </div>
        </div> 
    </div>
  )
}
