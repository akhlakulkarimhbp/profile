import React from 'react'
import Figma from '../../assets/figma.png'
import Canva from '../../assets/canva.png'
import XD from '../../assets/xd.png'
import Vscode from '../../assets/vscode.png'
import Stext from '../../assets/stext.png'
import Data2 from './Data2'

const Data = () => {
  return (
    <div className="skills__info grid">
      <div className="skills__box ">
        <img src={Figma} alt="" className="skills__icon" />
        <h3 className="skills__title">Figma</h3>
        <span className="skills__subtitle"> UI Design, prototyping </span>
      </div>
      <div className="skills__box">
        <img src={XD} alt="" className="skills__icon" />
        <h3 className="skills__title">Adobe XD</h3>
        <span className="skills__subtitle"> UI Design, prototyping </span>
      </div>
      <div className="skills__box">
        <img src={Stext} alt="" className="skills__icon" />
        <h3 className="skills__title">Sublime Text</h3>
        <span className="skills__subtitle"> Code Editor </span>
      </div>
      <div className="skills__box">
        <img src={Vscode} alt="" className="skills__icon" />
        <h3 className="skills__title">Visual Studio Code</h3>
        <span className="skills__subtitle"> Code Editor </span>
      </div>
      <div className="skills__box">
        <img src={Canva} alt="" className="skills__icon" />
        <h3 className="skills__title">Canva</h3>
        <span className="skills__subtitle"> Design Grafis Editor </span>
      </div>
      <Data2 />
    </div>
  )
}

export default Data
