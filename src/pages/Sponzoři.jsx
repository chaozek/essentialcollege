import React from 'react'
import Sidebar from "../Components/Sidebar"
import Submenu from "../Components/Submenu"
import Hero from "../Components/Hero"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import Hero_bottom from "../Components/Hero_bottom"
import img from "../imgs/partneri_hero.png"
export default function Sponzoři(props) {
    return (
        <div>
            <Navbar/>
            <Hero img={img} text={[<h1>Partneři</h1> ]} margin={"5rem"} />
            <Sidebar />
            <Hero_bottom/>

            <Submenu />
            <Footer /></div>
    )
}
