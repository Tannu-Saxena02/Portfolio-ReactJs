import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import HomeSection from './Components/HomeSection';
// import IntroSection from './Components/IntroSection';
import AboutSection from './Components/AboutSection';
import ExperienceSection from './Components/ExperienceSection';
import ContactUsSection from './Components/ContactUsSection';
import EducationAndSkillSection from './Components/EducationAndSkillSection';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeSection from './Components/HomeSection';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <HomeSection /> */}
    <BrowserRouter>
      <Routes>
            <Route exact path="/" element={<HomeSection/>}/>
            <Route exact path="/AboutSection"element={<AboutSection/>}/>
            <Route exact path="/ExperienceSection"element={<ExperienceSection/>}/>
            <Route exact path="/ContactUsSection" element={<ContactUsSection/>}/>
            <Route exact path="/EducationAndSkillSection" element={<EducationAndSkillSection/>}/>
            <Route exact path="/Footer" element={<Footer/>}/>
            {/* <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key={"technology"}  pageSize={pageSize} country={"in"} category={"technology"}/>}/> */}

         </Routes>
         </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
