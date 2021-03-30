import React from 'react'
import iresoft from "../imgs/iresoft.png"
import siemens from "../imgs/Siemens.png"
import optimal from "../imgs/optimal.png"
import "./Navbar.css"

export default function Hero_bottom() {
    return (
        <div className="hero_bottom_parrent">
        <div className="hero_bottom">
            <p>dovednosti, které u nás získáte, využívá vrcholový management
ve společnostech jako</p>
            <div className="firmy">
            <img src={iresoft} alt="iresoft" className="firmy-img"/>
            <img src={siemens} alt="siemens" className="firmy-img"/>
            <img src={optimal} alt="optimal" className="firmy-img"/>
            </div>
            </div>
            </div>
    )
}
