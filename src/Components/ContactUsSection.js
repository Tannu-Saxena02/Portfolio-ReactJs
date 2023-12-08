import React from "react";
import "./HomeSection.css";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillHome,
  AiOutlineMail,
} from "react-icons/ai";
export default function ContactUsSection() {
  return (
    <div id="ContactUsSection" className="contactUsSection">
      <div className="textContact mt-3">
        Contact
        <span className="contactMeText"> Me !</span>
      </div>
      <div className="formContainer">
        <div className="contactText">
          <div className="QueryText">
            If You have any Query in Your mind Conatact me
          </div>
          <div className="contactRoleText">
            I am a Mobile Developer/Frontend Developer can create interactive,
            bold and userfriendly design
          </div>
          <div className="contactIconContainer">
            <div className="columnIcon">
              <AiFillHome
                className="homeIcon"
                onMouseOver={({ target }) => (target.style.color = "#05B4FF")}
                onMouseOut={({ target }) => (target.style.color = "white")}
              />
              <AiOutlineMail
                onMouseOver={({ target }) => (target.style.color = "#05B4FF")}
                onMouseOut={({ target }) => (target.style.color = "white")}
                className="mailIcon"
              />
            </div>
            <div className="addressColumn">
              <div className="addressText">
                Brij Vihar Colony, Muradnagar, Ghaziabad
              </div>

              <div className="mailText">tannusaxena023@gmail.com</div>
            </div>
          </div>
          <div className="socialMediaIcon">
            <a
              href="https://www.instagram.com/fajuks/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillFacebook
                onMouseOver={({ target }) => (target.style.color = "#05B4FF")}
                onMouseOut={({ target }) => (target.style.color = "white")}
                className="iconMediaStyle"
              />
            </a>
            <a
              href="https://www.instagram.com/fajuks/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram
                onMouseOver={({ target }) => (target.style.color = "#05B4FF")}
                onMouseOut={({ target }) => (target.style.color = "white")}
                className="iconMediaStyle"
              />
            </a>
            <a
              href="https://www.instagram.com/fajuks/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillTwitterCircle
                onMouseOver={({ target }) => (target.style.color = "#05B4FF")}
                onMouseOut={({ target }) => (target.style.color = "white")}
                className="iconMediaStyle"
              />
            </a>
            <a
              href="https://www.instagram.com/fajuks/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin
                onMouseOver={({ target }) => (target.style.color = "#05B4FF")}
                onMouseOut={({ target }) => (target.style.color = "white")}
                className="iconMediaStyle"
              />
            </a>
          </div>
        </div>
        <form className="container inputContainer" action="">
          <div className="mb-3 mt-4">
            {/* <label className="form-label" style={{ color: "white" }}>
            Your Name
          </label> */}
            <input
              id="inputID"
              name="name"
              type="name"
              placeholder="Your Name"
              // className="form-control"
              className="form-control"
              aria-describedby="emailHelp"
              style={{
                backgroundColor: "#423e3e",
                color: "#FFFFFF",
                height: 50,
              }}
              required={true}
            />
          </div>
          <div className="mb-3">
            {/* <label className="form-label" style={{ color: "white" }}>
            Email address
          </label> */}
            <input
              id="inputID"
              name="email"
              placeholder="Your Email"
              type="email"
              required={true}
              className="form-control"
              aria-describedby="emailHelp"
              style={{
                backgroundColor: "#423e3e",
                color: "#FFFFFF",
                height: 50,
              }}
            />
          </div>
          <div className="mb-3">
            {/* <label className="form-label" style={{ color: "white" }}>
            Mobile Number
          </label> */}
            <input
              type="numeric"
              id="inputID"
              name="mobileno"
              className="form-control"
              required={true}
              placeholder="Your MobileNumber"
              aria-describedby="emailHelp"
              style={{
                backgroundColor: "#423e3e",
                color: "#FFFFFF",
                height: 50,
              }}
            />
          </div>
          <div className="mb-3">
            {/* <label className="form-label" style={{ color: "white" }}>
            Message
          </label> */}
            <textarea
              type="numeric"
              className="form-control"
              id="inputID"
              required
              placeholder="How can I help You?"
              aria-describedby="emailHelp"
              style={{
                backgroundColor: "#423e3e",
                color: "#FFFFFF",
                height: 190,
              }}
            />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label" style={{ color: "white" }}>
              Check me out
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-lg sendMessageButton"
          >
            {" "}
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
