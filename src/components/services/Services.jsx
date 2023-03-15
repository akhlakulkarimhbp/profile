import React from 'react'
import './services.css'
import Arrow from '../../assets/arrow-right.png'

const Services = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>
      <div className="services__container container grid">
        <div className="services__content grid">
          <div>
            <i className="uil uil-web-grid services__icon "></i>
            <h3 className="services__title">
              Web <br /> Designer
            </h3>
          </div>
          <span className="services__button">
            View More
            <img src={Arrow} alt="" className="services__button-icon" />
          </span>
        </div>

        <div className="services__content grid">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              UI/UX <br /> Designer
            </h3>
          </div>
          <span className="services__button">
            View More
            <img src={Arrow} alt="" className="services__button-icon" />
          </span>
        </div>

        <div className="services__content grid">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Branding <br /> Designer
            </h3>
          </div>
          <span className="services__button">
            View More
            <img src={Arrow} alt="" className="services__button-icon" />
          </span>
        </div>
      </div>
    </section>
  )
}

export default Services
