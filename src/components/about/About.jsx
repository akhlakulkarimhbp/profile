import React from 'react'
import './about.css'
import AboutImg from '../../assets/about.jpg'
import Info from './Info'

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>
      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />
        <div className="about__data">
          <Info />
          <p className="about__description">
            UI/UX designer , I create web pages user interface and Fronted
            Developer, I have less than one year of experience.
          </p>
          <a href="#about" className="button button--flex ">
            Download cv
            <i className="uil uil-file-alt"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
