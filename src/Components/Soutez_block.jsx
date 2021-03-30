import React from 'react'
import "./Soutez_block.css"

export default function Soutez_block(props) {
    return (
        <div>
            <div className="section">
                <div className="soutez-card margin-top">
                    <div className={`soutez_card_left ${props.class} `}>
                    <img src={props.img} alt=""/>
                    <img src={props.img2} alt=""/>
                    </div>
                    <div className="soutez_card_right">
                    <h1>{props.subject}</h1>
                    <h3>{props.lektor}</h3>
                    {props.header}
                    {props.text}
                    </div>
                </div>
                </div>
                </div>

    )
}
