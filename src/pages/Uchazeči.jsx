import React from 'react'
import "./ProUchazece.css"
import Sidebar from "../Components/Sidebar"
import Submenu from "../Components/Submenu"
import Hero from "../Components/Hero"
import Footer from "../Components/Footer"
import img from "../imgs/EC_GIRL2.png"
import Navbar from "../Components/Navbar"
import Hero_bottom from "../Components/Hero_bottom"
import Bottom from "../Components/Bottom_part.jsx" 

export default function Uchazeči(props) {
    return (
        <div>
            <Navbar/>
            <Hero img={img} text={[<h1>Pro uchazeče</h1>, ]} margin={"5rem"} />
            <Sidebar />
            <Hero_bottom/>
            <Submenu />
            <Bottom />
            <Footer/>
        </div>
    )
}
