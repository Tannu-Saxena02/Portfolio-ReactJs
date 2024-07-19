import React from "react";
import "./HomeSection.css";
import { AiOutlineArrowUp } from "react-icons/ai";
export default function Footer() {
  return (
    <div>
      <div className="footer" id="footer">
        <div className="designedByText">made by Tannu Saxena.</div>
        <div className="upButton">
          <a
            className="nav-link"
            href="#HomeSection"
            style={{ color: "white" }}
          >
            <button
              type="button"
              className="btn btn-primary btn"
              // className="arrowBtn"
            >
              <AiOutlineArrowUp
                size={18}
                style={{
                  justifyContent: "center",
                  alignSelf: "center",
                  alignContent: "center",
                }}
                className="arrowBtnIcon mb-1 "
              />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
