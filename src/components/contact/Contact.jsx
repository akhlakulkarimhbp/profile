import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>
      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">user@gmail.com</span>

              <a href="mailto@gamil.com" className="contact__button">
                Write me{' '}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">1234456666</span>

              <a href="pppppppp" className="contact__button">
                Write me{' '}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-messenger contact__card-icon"></i>
              <h3 className="contact__card-title">Messenger</h3>
              <span className="contact__card-data">user.fb123</span>

              <a href="pppppppp" className="contact__button">
                Write me{' '}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>

          <form action="" className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insert your name"
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Mail</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insert your email"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Project</label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Write your project"
              ></textarea>
            </div>
            <button className="button button--flex ">
              Send Message
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
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
