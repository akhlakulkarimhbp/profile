import React from 'react'
import Scroll from '../../assets/scroll.png'

const ScrollDown = () => {
  return (
    <div className="home__scroll">
      <a href="#about" className="home__scroll-button button--flex2">
        <span className="home__scroll-name">scroll down</span>
        <img src={Scroll} alt="Scroll" className="home__scroll-arrow" />
      </a>
    </div>
  )
}

export default ScrollDown
