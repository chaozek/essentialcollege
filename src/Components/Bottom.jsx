import React, {} from 'react'
import "./Bottom.css"
import img from "../imgs/EC_GIRL.png"
import { useGlobalContext } from '../context';

export default function Bottom() {
    const { sendEmail } = useGlobalContext();

    return (
        <div className="bottom">
                <div className="left-bottom">
            <img src={img} alt=""/>
                </div>
                <div className="right-bottom">
                    <h3>Otevíráme <span>v září 2022</span></h3>
                <h1>Na co čekáš?</h1>
                <form className="form" onSubmit={sendEmail}>
                    <input type="email" name="user_email" placeholder="Zadej e-mail"/>
                    <input type="number" name="user_number" placeholder="Zadej telefon" />
                    <input type="submit" className="btn" value="Chci více informací"/>
                    </form>
           </div>
        </div>
    )
}
