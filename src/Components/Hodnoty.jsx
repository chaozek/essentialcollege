import React from 'react'
import "./Hodnoty.css"
import hodnoty from "./hodnoty"
import img from "../imgs/bckg_3.png"

export default function Hodnoty() {
    return (
        <div className="hodnoty">
            <div className="section">
                <img className="heart-bckg" src={img} alt=""/>
                <div className="block">
                    <h1>Naše hodnoty</h1>
                {hodnoty.map((hodnota, index) => {
                    return (
                        <div key={index} className="hodnota">
                        <h4>{hodnota.title}</h4>
                            <p>{hodnota.name}</p>
                            
                        </div>

                        )
                    })}
                    </div>
                
            </div>
        </div>
    )
}
