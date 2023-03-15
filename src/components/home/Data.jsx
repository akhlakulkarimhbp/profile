import React from 'react'
import Logo22 from '../../assets/Logo22.png'

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        <img src={Logo22} alt="Logo22" />
      </h1>
      <h3 className="home__subtitle text--flex">
        Frontend Developer & User Interface Design
      </h3>

      <p className="home__description">
        I’m Frontend Developer & User Interface Design lucknow, and I’m very
        passionate and dedicated to my work..
      </p>

      <a href="#contact" className="button button--flex grid">
        Say Hello
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.33 0.669989C17.1408 0.482156 16.9035 0.35011 16.6442 0.288363C16.3849 0.226616 16.1135 0.237559 15.86 0.319988L1.23 5.19999C0.958673 5.28596 0.718908 5.45042 0.540989 5.67258C0.363071 5.89474 0.254981 6.16465 0.23037 6.44821C0.205759 6.73177 0.265732 7.01626 0.402714 7.26575C0.539696 7.51525 0.747543 7.71855 1 7.84999L7.07 10.85L10.07 16.94C10.1906 17.1784 10.3751 17.3785 10.6029 17.518C10.8307 17.6575 11.0929 17.7309 11.36 17.73H11.46C11.7461 17.7089 12.0192 17.6023 12.2439 17.424C12.4686 17.2456 12.6345 17.0038 12.72 16.73L17.67 2.13999C17.7584 1.88792 17.7734 1.61593 17.7132 1.35569C17.653 1.09544 17.5201 0.857646 17.33 0.669989ZM1.85 6.57999L14.62 2.31999L7.53 9.40999L1.85 6.57999ZM11.43 16.15L8.59 10.47L15.68 3.37999L11.43 16.15Z"
            fill="var(--container-color)"
          />
        </svg>
      </a>
    </div>
  )
}

export default Data
