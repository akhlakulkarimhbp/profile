import React from 'react'
import './testimonial.css'
import Testi from '../../assets/testi.png'

const Testimonial = () => {
  return (
    <section className="testimonial container section" id="testimonial">
      <h2 className="section__title">Testimonial</h2>
      <span className="section__subtitle">My client saying</span>
      <div className="testi__container container grid">
        <div className="testi__content grid">
          <div className="testi__description">
            <p className="testi__line">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>
          <p className="testi__title">
            <img src={Testi} alt="" className="testi__button" />
            Lorem ipsum dolor
            <br />
            Lorem ipsum
          </p>
        </div>
        <div className="testi__content grid">
          <div className="testi__description">
            <p className="testi__line">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>
          <p className="testi__title">
            <img src={Testi} alt="" className="testi__button" />
            Lorem ipsum dolor
            <br />
            Lorem ipsum
          </p>
        </div>
      </div>
      <div className="section__rounded">
        <div className="rounded1"></div>
        <div className="rounded2"></div>
        <div className="rounded3"></div>
      </div>
    </section>
  )
}

export default Testimonial
