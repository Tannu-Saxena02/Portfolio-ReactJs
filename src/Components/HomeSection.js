import React from "react";
import Navbar from "./Navbar";
import "./HomeSection.css";
import ExperienceSection from "./ExperienceSection";
import IntroSection from "./IntroSection";
import AboutSection from "./AboutSection";
import EducationAndSkillSection from "./EducationAndSkillSection";
import ContactUsSection from "./ContactUsSection";
import Footer from "./Footer";

// import {
//   AiFillFacebook,
//   AiFillInstagram,
//   AiFillLinkedin,
//   AiFillTwitterCircle,
//   AiOutlineFacebook,
//   AiFillHome,
//   AiOutlineMail,
//   AiOutlineDownload,
//   AiOutlineMobile,
//   AiOutlineLaptop,
//   AiOutlineCode,
//   AiOutlineArrowUp,
// } from "react-icons/ai";
export default function HomeSection() {
 
  return (
    // backgroundColor: "#1F1F38"
    // backgroundColor: "#2A2A2A"
    <div  id="HomeSection" style={{ width: "100%", height: "100%" }}>
      <Navbar />
      <div style={{ overflow: "hidden" }}>
       <IntroSection/>
        {/* -------------------------------experience-------------------------------------- */}
       <ExperienceSection/>
        {/* -----------------------------------------------About--------------------------------------------------- */}
       <AboutSection/>
        {/* ------------------------------------------------Education and Skill---------------------------------------------- */}
       <EducationAndSkillSection/>
        {/* ------------------------------------------------------Contact Us----------------------------------------------------------- */}
       <ContactUsSection/>
        {/* -----------------------------------------------------Footer------------------------------------------------- */}
       <Footer/>
      </div>
    </div>
  );
}
