import React, {useState} from 'react'
import "./Coverscreen.css"
import img from "../imgs/UAM-LOGO_header.png"
import ec from "../imgs/ec.png"
import fb from "../imgs/FB_3.png"
import web from "../imgs/web.png"
import yt from "../imgs/yt.png"
import ig from "../imgs/ig.png"
import { Link } from "react-router-dom"

export default function Coverscreen() {
    const [active, setActive] = useState(false)
    const [activeLeft, setActiveLeft] = useState(false)
    const handleMouseOver = () => {
        setActive(true)
    }
    const handleMouseLeave = () => {
      setActive(false)
    }
    const handleMouseOverLeft = () => {
        setActiveLeft(true)
    }
    const handleMouseLeaveLeft = () => {
        setActiveLeft(false)
    }



    return (
        <div className="cover-page fade-in"> 
            <div className="cover">
            <div className={activeLeft===true? "left activeLeft": "left"}>
                    <h2>Fakulta celoživotního vzdělávání<br /> </h2>
                    <span>pro podnikatele, obchodníky a další...</span>
                    <img className="cover-logo" src={img} alt="xxx" />
                    <button className="btn-cover ec" onMouseOver={handleMouseOverLeft} onMouseLeave={handleMouseLeaveLeft}><a href="http://universityam.com/"><span>universityam.cz</span></a></button>

            </div>
            <div className={active===true? "right active": "right"}>
                    <h2>Fakulta praktického vzdělávání<br /> </h2>
                    <span>pro absolventy středních škol</span>
                    <img className="cover-logo" src={ec} alt="xxx" />
                    <Link to="/doma"> <button className="btn-cover" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} ><span>essentialcollege.cz</span></button></Link>
                <div className="social">
                <img src={fb} alt="x"/>
                <img src={web} alt="x"/>
                <img src={yt} alt="x"/>
                <img src={ig} alt="x"/>
                </div>

                </div>
            </div>
            </div>
    )
}
