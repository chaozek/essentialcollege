import React from 'react'
import { useGlobalContext } from '../context';
import "./Navbar.css"
export default function Hero(props) {
    const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

    return (
        <div className="hero fade-in" onMouseOver={closeSubmenu}>
            <div className="section-hero">
                <div className="hero-left ">{props.text}
                   {window.location.pathname === "/doma" && <button className="btn">Chci vědět víc</button>} 
                </div>
                <div className="hero-right">
                    <img src={props.img} alt="hero-img" />
            </div>
            </div>

            
        </div>
    )
}
