import React from 'react'
import "./Footer.css"
import img from "../imgs/EC_2.png"
import FB_2 from "../imgs/fb.png"
import IG_3 from "../imgs/ig_2.png"
import IN from "../imgs/IN.png"
import { Link } from "react-router-dom"
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
                        <a href="https://www.instagram.com/essential_college/">                    <img src={IG_3} alt="ec_ig" />
                        </a>
                        <a href="https://www.facebook.com/essentialCollege/">                    <img src={FB_2} alt="ec_fb" />
                        </a>
                        <a href="https://www.linkedin.com/company/essential-college?originalSubdomain=cz">                    <img src={IN} alt="ec_in" />
</a>
                    </div>

                    
                </div>
                <div className="footer-menu_1">
                    <h3>Menu</h3>
                    <ul>
                    <Link to="/doma">                    <li><a href="#">Doma</a></li>
</Link>
                    <Link to="/oskole">                    <li><a href="#">O škole</a></li>
</Link>
                    <Link to="/katedry">                    <li><a href="#">Katedry</a></li>
</Link>
                    <Link to="/sponzori">                    <li><a href="#">Partneři</a></li>
</Link>
                    </ul>
                </div>
                <div className="footer-menu_2">
                <h3>Rozšířené</h3>
                    <ul>
                    <Link to="/soutez">                    <li><a href="#">Soutěž</a></li>
</Link>


                    </ul>
                </div>
            </div>
        </div>
    )
}
