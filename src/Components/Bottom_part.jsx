import React from 'react'
import img from "../imgs/EC_GIRL.png"
import { useGlobalContext } from '../context';
import "./Bottom_part.css"
import { ToastContainer, toast, Zoom, Bounce } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

export default function Bottom() {
    const { sendEmail, changeValue, value } = useGlobalContext();

    return (
        <div className="bottom_part">
                <div className="left_bottom_part">
            <img src={img} alt="ec_girl"/>
                </div>
                <div className="right_bottom_part">
                    <h3>Otevíráme <span>v září 2022</span></h3>
                <h1>Na co čekáš?</h1>
                <p>Zanech na sebe kontakt, my se ti ozvem a essential představíme</p>
                <ToastContainer/>
                <form className="form" onSubmit={sendEmail}>
                    <input type="email" name="user_email" placeholder="Zadej e-mail" value={value} onChange={(e)=>{changeValue(e)}} />
                    <input type="number" name="user_number" placeholder="Zadej telefon" />
                  {value!=0 && <input type="submit" className="btn" value="Chci více informací"/>}  
                    </form>
           </div>
            <ToastContainer/>
        </div>
    )
}
