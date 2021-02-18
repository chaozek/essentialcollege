import React from 'react'
import "./Footer.css"
import img from "../imgs/ec.png"
import FB_2 from "../imgs/FB_2.png"
import IG_3 from "../imgs/ig_2.png"
import IN from "../imgs/IN.png"

export default function Footer() {
    return (
        <div className="footer">
            <div className="section">
                <div className="footer-left">
                    <img src={img} alt="" />
                    <h3>Novodobá vysoká škola,
která vzdělává praxí</h3>
                    <span></span>
                    <div className="footer-social">
                    <img src={FB_2} alt="" />
                    <img src={IG_3} alt="" />
                    <img src={IN} alt="" />
                    </div>

                    
                </div>
                <div className="footer-menu_1">
                    <h3>Menu</h3>
                    <ul>
                    <li><a href="#">ODKAZ</a></li>
                    <li><a href="#">ODKAZ</a></li>
                    <li><a href="#">ODKAZ</a></li>
                    <li><a href="#">ODKAZ</a></li>
                    </ul>
                </div>
                <div className="footer-menu_2">
                <h3>Menu</h3>
                <ul>
                    <li><a href="#">ODKAZ</a></li>
                    <li><a href="#">ODKAZ</a></li>
                    <li><a href="#">ODKAZ</a></li>
                    <li><a href="#">ODKAZ</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
