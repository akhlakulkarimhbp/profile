import React from 'react'
import Html from '../../assets/html.png'
import Css from '../../assets/css.png'
import Js from '../../assets/js.png'
import Php from '../../assets/php.png'
import Mysql from '../../assets/mysql.png'
import Mongodb from '../../assets/mongodb.png'

const Data = () => {
  return (
    <div className="skills__info2 grid">
      <div className="skills__box2 ">
        <img src={Html} alt="" className="skills__icon2" />
        <h3 className="skills__title2">HTML</h3>
        <span className="skills__subtitle2"> Structural Design </span>
      </div>
      <div className="skills__box2">
        <img src={Css} alt="" className="skills__icon2" />
        <h3 className="skills__title2">CSS</h3>
        <span className="skills__subtitle2"> Style Design </span>
      </div>
      <div className="skills__box2">
        <img src={Js} alt="" className="skills__icon2" />
        <h3 className="skills__title2">Javascript</h3>
        <span className="skills__subtitle2"> Web Development</span>
      </div>
      <div className="skills__box2">
        <img src={Php} alt="" className="skills__icon2" />
        <h3 className="skills__title2">PHP</h3>
        <span className="skills__subtitle2"> Web Development </span>
      </div>
      <div className="skills__box2">
        <img src={Mysql} alt="" className="skills__icon2" />
        <h3 className="skills__title2">Mysql</h3>
        <span className="skills__subtitle2"> Database Management </span>
      </div>
      <div className="skills__box2">
        <img src={Mongodb} alt="" className="skills__icon2" />
        <h3 className="skills__title2">MongoDB</h3>
        <span className="skills__subtitle2"> Database Sistem </span>
      </div>
    </div>
  )
}

export default Data
