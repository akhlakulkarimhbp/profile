import React from 'react'
import './footer.css'
import Logo from '../../assets/Logo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <a href="#logo" className="footer__title">
          <img src={Logo} alt="Logo" />
        </a>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portofolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#services" className="footer__link">
              Services
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://www.facebook.com/" className="footer__social-link">
            <li class="bx bxl-facebook"></li>
          </a>
          <a href="https://www.instagram.com/" className="footer__social-link">
            <li class="bx bxl-instagram"></li>
          </a>
          <a href="https://www.twitter.com/" className="footer__social-link">
            <li class="bx bxl-twitter"></li>
          </a>
          <a href="https://www.linkedin.com/" className="footer__social-link">
            <li class="bx bxl-linkedin"></li>
          </a>
        </div>
        <span className="footer__copy">@krish4alex. All rights reserved</span>
      </div>
    </footer>
  )
}

export default Footer
