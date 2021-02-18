import React from 'react'
import { useGlobalContext } from '../context';
import "./Navbar.css"
import img from "../imgs/5fdc2348502ddb253baa8e62_hero img-p-500.png"
export default function Hero() {
    const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

    return (
        <div className="hero" onMouseOver={closeSubmenu}>
            <div className="section-hero">
                <div className="hero-left"><h1>Novodobá vysoká škola,která<span> vzdělává praxí</span>
</h1>
<button className="btn">Chci vědět víc</button>

                </div>
                <div className="hero-right">
            <img src={img} alt=""/>
            </div>
            </div>
            
        </div>
    )
}
